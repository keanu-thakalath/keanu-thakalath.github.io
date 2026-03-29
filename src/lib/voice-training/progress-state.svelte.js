import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';

const STORAGE_KEY = 'voice-course-progress-v3';
const OLD_STORAGE_KEY = 'voice-course-progress-v2';
const PROGRESS_KEY = Symbol('PROGRESS');

export class ProgressState {
	startedAt = $state(null);
	updatedAt = $state(null);
	completedLessons = $state({});
	homeworkLinks = $state({});

	// Each day's task is a separate instance: "dayIndex:taskId" → true
	taskDone = $state({});
	// Text per instance: "dayIndex:taskId" → string
	taskTexts = $state({});
	// Which practice day the user is on (0-based)
	lessonDays = $state({});
	// Recording metadata: lessonId -> "dayIndex:taskId" -> slotId -> { durationMs, createdAt, sizeBytes }
	recordingMeta = $state({});
	// Whether the user has explicitly started the course (clicked "Begin Course")
	courseStarted = $state(false);

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
			let raw = localStorage.getItem(STORAGE_KEY);
			let parsed = raw ? JSON.parse(raw) : null;

			// v2 migration
			if (!parsed) {
				const oldRaw = localStorage.getItem(OLD_STORAGE_KEY);
				if (oldRaw) {
					const old = JSON.parse(oldRaw);
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
			this.courseStarted = parsed.courseStarted ??
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

	toggleLesson(lessonId) {
		this.completedLessons[lessonId] = !this.completedLessons[lessonId];
		this.#save();
	}

	lessonDone(lessonId) {
		return Boolean(this.completedLessons[lessonId]);
	}

	// --- Practice day tracking ---

	getLessonDay(lessonId) {
		return Number(this.lessonDays[lessonId] ?? 0);
	}

	advanceLessonDay(lessonId) {
		this.lessonDays[lessonId] = this.getLessonDay(lessonId) + 1;
		this.#save();
	}

	// --- Per-instance done (timer, check) ---

	#instanceKey(dayIndex, taskId) {
		return `${dayIndex}:${taskId}`;
	}

	isInstanceDone(lessonId, dayIndex, taskId) {
		return Boolean(this.taskDone[lessonId]?.[this.#instanceKey(dayIndex, taskId)]);
	}

	markInstanceDone(lessonId, dayIndex, taskId) {
		if (!this.taskDone[lessonId]) this.taskDone[lessonId] = {};
		this.taskDone[lessonId][this.#instanceKey(dayIndex, taskId)] = true;
		this.#save();
	}

	// --- Per-instance text ---

	getInstanceText(lessonId, dayIndex, taskId) {
		return this.taskTexts[lessonId]?.[this.#instanceKey(dayIndex, taskId)] ?? '';
	}

	setInstanceText(lessonId, dayIndex, taskId, value) {
		if (!this.taskTexts[lessonId]) this.taskTexts[lessonId] = {};
		this.taskTexts[lessonId][this.#instanceKey(dayIndex, taskId)] = value;
		this.#save();
	}

	// --- Links (shared across days, not per-instance) ---

	getLinks(lessonId, taskId) {
		return this.homeworkLinks[lessonId]?.[taskId] ?? [];
	}

	addLink(lessonId, taskId, title, url) {
		if (!this.homeworkLinks[lessonId]) this.homeworkLinks[lessonId] = {};
		if (!this.homeworkLinks[lessonId][taskId]) this.homeworkLinks[lessonId][taskId] = [];
		this.homeworkLinks[lessonId][taskId].push({
			id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
			title: title.trim(),
			url: url.trim()
		});
		this.#save();
	}

	removeLink(lessonId, taskId, linkId) {
		const links = this.homeworkLinks[lessonId]?.[taskId];
		if (!links) return;
		this.homeworkLinks[lessonId][taskId] = links.filter((l) => l.id !== linkId);
		this.#save();
	}

	// --- Recording metadata ---

	setRecordingMeta(lessonId, dayIndex, taskId, slotId, meta) {
		const key = this.#instanceKey(dayIndex, taskId);
		if (!this.recordingMeta[lessonId]) this.recordingMeta[lessonId] = {};
		if (!this.recordingMeta[lessonId][key]) this.recordingMeta[lessonId][key] = {};
		this.recordingMeta[lessonId][key][slotId] = meta;
		this.#save();
	}

	getRecordingMeta(lessonId, dayIndex, taskId, slotId) {
		const key = this.#instanceKey(dayIndex, taskId);
		return this.recordingMeta[lessonId]?.[key]?.[slotId] ?? null;
	}

	removeRecordingMeta(lessonId, dayIndex, taskId, slotId) {
		const key = this.#instanceKey(dayIndex, taskId);
		if (this.recordingMeta[lessonId]?.[key]) {
			delete this.recordingMeta[lessonId][key][slotId];
			this.#save();
		}
	}

	hasRecording(lessonId, dayIndex, taskId, slotId) {
		return this.getRecordingMeta(lessonId, dayIndex, taskId, slotId) !== null;
	}

	getRecordingSlots(lessonId, dayIndex, taskId) {
		const key = this.#instanceKey(dayIndex, taskId);
		return this.recordingMeta[lessonId]?.[key] ?? {};
	}

	// --- Aggregate queries (for lesson page / home page) ---

	isLessonPracticeComplete(lessonId, lesson) {
		return this.getLessonDay(lessonId) >= (lesson.schedule?.length ?? 0);
	}

	taskInstancesDone(lessonId, taskId, taskType, schedule) {
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

export function setProgressState(testMode = false) {
	return setContext(PROGRESS_KEY, new ProgressState(testMode));
}

export function getProgressState() {
	return getContext(PROGRESS_KEY);
}
