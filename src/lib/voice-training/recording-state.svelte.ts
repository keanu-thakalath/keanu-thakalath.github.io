import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';
import { recordingStore, buildClipKey } from '$lib/voice-training/recording-store.js';
import type { ProgressState } from '$lib/voice-training/progress-state.svelte.js';

const RECORDING_KEY = Symbol('RECORDING');

function pickMimeType(): string | null {
	if (typeof MediaRecorder === 'undefined') return null;
	for (const type of ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4']) {
		if (MediaRecorder.isTypeSupported(type)) return type;
	}
	return null;
}

export class RecordingState {
	available: boolean = $state(false);
	micPermission: string = $state('prompt');
	isRecording: boolean = $state(false);
	activeSlotKey: string | null = $state(null);
	elapsed: number = $state(0);

	#progress: ProgressState;
	#mimeType: string | null = null;
	#mediaRecorder: MediaRecorder | null = null;
	#stream: MediaStream | null = null;
	#chunks: Blob[] = [];
	#startTime = 0;
	#elapsedHandle: ReturnType<typeof setInterval> | null = null;
	#objectUrls: string[] = [];

	constructor(progressState: ProgressState) {
		this.#progress = progressState;
		if (browser) {
			this.#mimeType = pickMimeType();
			this.available = this.#mimeType !== null && typeof indexedDB !== 'undefined';
		}
	}

	async requestMic(): Promise<boolean> {
		if (!browser || !this.available) return false;
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			stream.getTracks().forEach((t) => t.stop());
			this.micPermission = 'granted';
			return true;
		} catch {
			this.micPermission = 'denied';
			return false;
		}
	}

	async startRecording(slotKey?: string) {
		if (this.isRecording || !this.available || !this.#mimeType) return;
		try {
			this.#stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			this.micPermission = 'granted';
		} catch {
			this.micPermission = 'denied';
			return;
		}
		this.#chunks = [];
		this.#mediaRecorder = new MediaRecorder(this.#stream, {
			mimeType: this.#mimeType
		});
		this.#mediaRecorder.ondataavailable = (e) => {
			if (e.data.size > 0) this.#chunks.push(e.data);
		};
		this.#mediaRecorder.start();
		this.#startTime = Date.now();
		this.elapsed = 0;
		this.isRecording = true;
		this.activeSlotKey = slotKey ?? null;
		this.#elapsedHandle = setInterval(() => {
			this.elapsed = Math.floor((Date.now() - this.#startTime) / 1000);
		}, 200);
	}

	async stopRecording(): Promise<{ blob: Blob; durationMs: number } | null> {
		const recorder = this.#mediaRecorder;
		if (!this.isRecording || !recorder) return null;
		const mimeType = this.#mimeType;
		const blob = await new Promise<Blob>((resolve) => {
			recorder.onstop = () => {
				if (this.#elapsedHandle) clearInterval(this.#elapsedHandle);
				this.#elapsedHandle = null;
				this.isRecording = false;
				this.activeSlotKey = null;
				this.#stream?.getTracks().forEach((t) => t.stop());
				this.#stream = null;
				const result = new Blob(this.#chunks, { type: mimeType ?? undefined });
				this.#chunks = [];
				this.#mediaRecorder = null;
				resolve(result);
			};
			recorder.stop();
		});
		const durationMs = await this.#probeDuration(blob);
		return { blob, durationMs };
	}

	#probeDuration(blob: Blob): Promise<number> {
		return new Promise((resolve) => {
			const url = URL.createObjectURL(blob);
			const audio = new Audio();
			let resolved = false;
			const done = (ms: number) => {
				if (resolved) return;
				resolved = true;
				audio.removeAttribute('src');
				audio.load();
				URL.revokeObjectURL(url);
				resolve(ms);
			};
			audio.addEventListener('loadedmetadata', () => {
				if (isFinite(audio.duration) && audio.duration > 0) {
					done(Math.round(audio.duration * 1000));
				}
			});
			audio.addEventListener('durationchange', () => {
				if (isFinite(audio.duration) && audio.duration > 0) {
					done(Math.round(audio.duration * 1000));
				}
			});
			// Fallback: if metadata doesn't give us duration, use wall-clock time
			setTimeout(() => done(Date.now() - this.#startTime), 500);
			audio.src = url;
		});
	}

	async saveClip(
		lessonId: string,
		dayIndex: number,
		taskId: string,
		slotId: string,
		blob: Blob,
		durationMs: number
	) {
		const key = buildClipKey(lessonId, dayIndex, taskId, slotId);
		await recordingStore.save(key, blob, durationMs);
		this.#progress.setRecordingMeta(lessonId, dayIndex, taskId, slotId, {
			durationMs,
			createdAt: new Date().toISOString(),
			sizeBytes: blob.size
		});
	}

	async loadClip(
		lessonId: string,
		dayIndex: number,
		taskId: string,
		slotId: string
	): Promise<{ url: string; durationMs: number } | null> {
		const key = buildClipKey(lessonId, dayIndex, taskId, slotId);
		const record = await recordingStore.load(key);
		if (!record) return null;
		const url = URL.createObjectURL(record.blob);
		this.#objectUrls.push(url);
		return { url, durationMs: record.durationMs };
	}

	async deleteClip(lessonId: string, dayIndex: number, taskId: string, slotId: string) {
		const key = buildClipKey(lessonId, dayIndex, taskId, slotId);
		await recordingStore.delete(key);
		this.#progress.removeRecordingMeta(lessonId, dayIndex, taskId, slotId);
	}

	hasClip(lessonId: string, dayIndex: number, taskId: string, slotId: string): boolean {
		return this.#progress.hasRecording(lessonId, dayIndex, taskId, slotId);
	}

	getClipMeta(lessonId: string, dayIndex: number, taskId: string, slotId: string) {
		return this.#progress.getRecordingMeta(lessonId, dayIndex, taskId, slotId);
	}

	cancelRecording() {
		if (!this.isRecording) return;
		if (this.#elapsedHandle) {
			clearInterval(this.#elapsedHandle);
			this.#elapsedHandle = null;
		}
		this.isRecording = false;
		this.activeSlotKey = null;
		this.#mediaRecorder?.stop();
		this.#stream?.getTracks().forEach((t) => t.stop());
		this.#stream = null;
		this.#chunks = [];
		this.#mediaRecorder = null;
	}

	destroy() {
		this.cancelRecording();
		for (const url of this.#objectUrls) {
			URL.revokeObjectURL(url);
		}
		this.#objectUrls = [];
	}
}

export function setRecordingState(progressState: ProgressState): RecordingState {
	return setContext(RECORDING_KEY, new RecordingState(progressState));
}

export function getRecordingState(): RecordingState {
	return getContext<RecordingState>(RECORDING_KEY);
}
