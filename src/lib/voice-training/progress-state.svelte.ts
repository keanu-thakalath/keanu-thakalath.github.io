import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';

const STORAGE_KEY = 'voice-course-progress-v3';
const OLD_STORAGE_KEY = 'voice-course-progress-v2';
const PROGRESS_KEY = Symbol('PROGRESS');

export interface RecordingMetaEntry {
	durationMs: number;
	createdAt: string;
	sizeBytes: number;
}

export interface SavedLink {
	id: string;
	title: string;
	url: string;
}

interface StoredProgress {
	startedAt?: string | null;
	updatedAt?: string | null;
	completedLessons?: Record<string, boolean>;
	homeworkLinks?: Record<string, Record<string, SavedLink[]>>;
	taskDone?: Record<string, Record<string, boolean>>;
	taskTexts?: Record<string, Record<string, string>>;
	lessonDays?: Record<string, number>;
	recordingMeta?: Record<string, Record<string, Record<string, RecordingMetaEntry>>>;
	courseStarted?: boolean;
}

export class ProgressState {
	startedAt: string | null = $state(null);
	updatedAt: string | null = $state(null);
	completedLessons: Record<string, boolean> = $state({});
	homeworkLinks: Record<string, Record<string, SavedLink[]>> = $state({});

	// Each day's task is a separate instance: "dayIndex:taskId" → true
	taskDone: Record<string, Record<string, boolean>> = $state({});
	// Text per instance: "dayIndex:taskId" → string
	taskTexts: Record<string, Record<string, string>> = $state({});
	// Which practice day the user is on (0-based)
	lessonDays: Record<string, number> = $state({});
	// Recording metadata: lessonId -> "dayIndex:taskId" -> slotId -> { durationMs, createdAt, sizeBytes }
	recordingMeta: Record<string, Record<string, Record<string, RecordingMetaEntry>>> = $state({});
	// Whether the user has explicitly started the course (clicked "Begin Course")
	courseStarted: boolean = $state(false);

	testMode: boolean;

	constructor(testMode = false) {
		this.testMode = testMode;
		if (testMode) {
			this.startedAt = new Date().toISOString();
			this.courseStarted = true;
			return;
		}
		if (browser) {
			this.#load();
		}
	}

	#load() {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			let parsed: StoredProgress | null = raw ? JSON.parse(raw) : null;

			// v2 migration
			if (!parsed) {
				const oldRaw = localStorage.getItem(OLD_STORAGE_KEY);
				if (oldRaw) {
					const old: StoredProgress = JSON.parse(oldRaw);
					parsed = {
						startedAt: old.startedAt,
						updatedAt: old.updatedAt,
						completedLessons: old.completedLessons ?? {},
						homeworkLinks: old.homeworkLinks ?? {},
						taskDone: {},
						taskTexts: {},
						lessonDays: {},
						recordingMeta: {}
					};
				}
			}

			if (!parsed) parsed = {};

			this.startedAt = parsed.startedAt ?? null;
			this.updatedAt = parsed.updatedAt ?? null;
			this.completedLessons = parsed.completedLessons ?? {};
			this.homeworkLinks = parsed.homeworkLinks ?? {};
			this.taskDone = parsed.taskDone ?? {};
			this.taskTexts = parsed.taskTexts ?? {};
			this.lessonDays = parsed.lessonDays ?? {};
			this.recordingMeta = parsed.recordingMeta ?? {};
			// Explicit flag, or infer true for existing users who have progress
			this.courseStarted =
				parsed.courseStarted ??
				(Object.keys(this.completedLessons).length > 0 ||
					Object.keys(this.taskDone).length > 0 ||
					Object.keys(this.lessonDays).length > 0);

			if (!this.startedAt) {
				this.startedAt = new Date().toISOString();
				this.#save();
			}
		} catch {
			this.startedAt = new Date().toISOString();
			this.#save();
		}
	}

	#save() {
		if (!browser || this.testMode) return;
		this.updatedAt = new Date().toISOString();
		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({
				startedAt: this.startedAt,
				updatedAt: this.updatedAt,
				completedLessons: $state.snapshot(this.completedLessons),
				homeworkLinks: $state.snapshot(this.homeworkLinks),
				taskDone: $state.snapshot(this.taskDone),
				taskTexts: $state.snapshot(this.taskTexts),
				lessonDays: $state.snapshot(this.lessonDays),
				recordingMeta: $state.snapshot(this.recordingMeta),
				courseStarted: this.courseStarted
			})
		);
	}

	startCourse() {
		this.courseStarted = true;
		this.#save();
	}

	// --- Lesson read status ---

	toggleLesson(lessonId: string) {
		this.completedLessons[lessonId] = !this.completedLessons[lessonId];
		this.#save();
	}

	lessonDone(lessonId: string): boolean {
		return Boolean(this.completedLessons[lessonId]);
	}

	// --- Practice day tracking ---

	getLessonDay(lessonId: string): number {
		return Number(this.lessonDays[lessonId] ?? 0);
	}

	advanceLessonDay(lessonId: string) {
		this.lessonDays[lessonId] = this.getLessonDay(lessonId) + 1;
		this.#save();
	}

	// --- Per-instance done (timer, check) ---

	#instanceKey(dayIndex: number, taskId: string): string {
		return `${dayIndex}:${taskId}`;
	}

	isInstanceDone(lessonId: string, dayIndex: number, taskId: string): boolean {
		return Boolean(this.taskDone[lessonId]?.[this.#instanceKey(dayIndex, taskId)]);
	}

	markInstanceDone(lessonId: string, dayIndex: number, taskId: string) {
		if (!this.taskDone[lessonId]) this.taskDone[lessonId] = {};
		this.taskDone[lessonId][this.#instanceKey(dayIndex, taskId)] = true;
		this.#save();
	}

	// --- Per-instance text ---

	getInstanceText(lessonId: string, dayIndex: number, taskId: string): string {
		return this.taskTexts[lessonId]?.[this.#instanceKey(dayIndex, taskId)] ?? '';
	}

	setInstanceText(lessonId: string, dayIndex: number, taskId: string, value: string) {
		if (!this.taskTexts[lessonId]) this.taskTexts[lessonId] = {};
		this.taskTexts[lessonId][this.#instanceKey(dayIndex, taskId)] = value;
		this.#save();
	}

	// --- Links (shared across days, not per-instance) ---

	getLinks(lessonId: string, taskId: string): SavedLink[] {
		return this.homeworkLinks[lessonId]?.[taskId] ?? [];
	}

	addLink(lessonId: string, taskId: string, title: string, url: string) {
		if (!this.homeworkLinks[lessonId]) this.homeworkLinks[lessonId] = {};
		if (!this.homeworkLinks[lessonId][taskId]) this.homeworkLinks[lessonId][taskId] = [];
		this.homeworkLinks[lessonId][taskId].push({
			id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
			title: title.trim(),
			url: url.trim()
		});
		this.#save();
	}

	removeLink(lessonId: string, taskId: string, linkId: string) {
		const links = this.homeworkLinks[lessonId]?.[taskId];
		if (!links) return;
		this.homeworkLinks[lessonId][taskId] = links.filter((l) => l.id !== linkId);
		this.#save();
	}

	// --- Recording metadata ---

	setRecordingMeta(
		lessonId: string,
		dayIndex: number,
		taskId: string,
		slotId: string,
		meta: RecordingMetaEntry
	) {
		const key = this.#instanceKey(dayIndex, taskId);
		if (!this.recordingMeta[lessonId]) this.recordingMeta[lessonId] = {};
		if (!this.recordingMeta[lessonId][key]) this.recordingMeta[lessonId][key] = {};
		this.recordingMeta[lessonId][key][slotId] = meta;
		this.#save();
	}

	getRecordingMeta(
		lessonId: string,
		dayIndex: number,
		taskId: string,
		slotId: string
	): RecordingMetaEntry | null {
		const key = this.#instanceKey(dayIndex, taskId);
		return this.recordingMeta[lessonId]?.[key]?.[slotId] ?? null;
	}

	removeRecordingMeta(lessonId: string, dayIndex: number, taskId: string, slotId: string) {
		const key = this.#instanceKey(dayIndex, taskId);
		if (this.recordingMeta[lessonId]?.[key]) {
			delete this.recordingMeta[lessonId][key][slotId];
			this.#save();
		}
	}

	hasRecording(lessonId: string, dayIndex: number, taskId: string, slotId: string): boolean {
		return this.getRecordingMeta(lessonId, dayIndex, taskId, slotId) !== null;
	}

	getRecordingSlots(
		lessonId: string,
		dayIndex: number,
		taskId: string
	): Record<string, RecordingMetaEntry> {
		const key = this.#instanceKey(dayIndex, taskId);
		return this.recordingMeta[lessonId]?.[key] ?? {};
	}

	// --- Aggregate queries (for lesson page / home page) ---

	isLessonPracticeComplete(lessonId: string, lesson: { schedule?: string[][] }): boolean {
		return this.getLessonDay(lessonId) >= (lesson.schedule?.length ?? 0);
	}

	taskInstancesDone(
		lessonId: string,
		taskId: string,
		taskType: string,
		schedule: string[][]
	): number {
		let done = 0;
		for (let i = 0; i < schedule.length; i++) {
			if (schedule[i].includes(taskId)) {
				if (taskType === 'text') {
					if (this.getInstanceText(lessonId, i, taskId).trim().length > 0) done++;
				} else if (taskType === 'recording') {
					const slots = this.getRecordingSlots(lessonId, i, taskId);
					if (Object.keys(slots).length > 0) done++;
				} else {
					if (this.isInstanceDone(lessonId, i, taskId)) done++;
				}
			}
		}
		return done;
	}
}

export function setProgressState(testMode = false): ProgressState {
	return setContext(PROGRESS_KEY, new ProgressState(testMode));
}

export function getProgressState(): ProgressState {
	return getContext<ProgressState>(PROGRESS_KEY);
}
