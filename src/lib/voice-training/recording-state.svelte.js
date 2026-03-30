import { getContext, setContext } from 'svelte';
import { browser } from '$app/environment';
import { recordingStore } from '$lib/voice-training/recording-store.js';

const RECORDING_KEY = Symbol('RECORDING');

function pickMimeType() {
	if (typeof MediaRecorder === 'undefined') return null;
	for (const type of ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4']) {
		if (MediaRecorder.isTypeSupported(type)) return type;
	}
	return null;
}

export class RecordingState {
	available = $state(false);
	micPermission = $state('prompt');
	isRecording = $state(false);
	activeSlotKey = $state(null);
	elapsed = $state(0);

	#progress;
	#mimeType = null;
	#mediaRecorder = null;
	#stream = null;
	#chunks = [];
	#startTime = 0;
	#elapsedHandle = null;
	#objectUrls = [];

	constructor(progressState) {
		this.#progress = progressState;
		if (browser) {
			this.#mimeType = pickMimeType();
			this.available = this.#mimeType !== null && typeof indexedDB !== 'undefined';
		}
	}

	async requestMic() {
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

	async startRecording(slotKey) {
		if (this.isRecording || !this.available) return;
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

	async stopRecording() {
		if (!this.isRecording || !this.#mediaRecorder) return null;
		const blob = await new Promise((resolve) => {
			this.#mediaRecorder.onstop = () => {
				clearInterval(this.#elapsedHandle);
				this.#elapsedHandle = null;
				this.isRecording = false;
				this.activeSlotKey = null;
				this.#stream?.getTracks().forEach((t) => t.stop());
				this.#stream = null;
				const result = new Blob(this.#chunks, { type: this.#mimeType });
				this.#chunks = [];
				this.#mediaRecorder = null;
				resolve(result);
			};
			this.#mediaRecorder.stop();
		});
		const durationMs = await this.#probeDuration(blob);
		return { blob, durationMs };
	}

	#probeDuration(blob) {
		return new Promise((resolve) => {
			const url = URL.createObjectURL(blob);
			const audio = new Audio();
			let resolved = false;
			const done = (ms) => {
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

	async saveClip(lessonId, dayIndex, taskId, slotId, blob, durationMs) {
		const key = recordingStore.constructor.buildKey(lessonId, dayIndex, taskId, slotId);
		await recordingStore.save(key, blob, durationMs);
		this.#progress.setRecordingMeta(lessonId, dayIndex, taskId, slotId, {
			durationMs,
			createdAt: new Date().toISOString(),
			sizeBytes: blob.size
		});
	}

	async loadClip(lessonId, dayIndex, taskId, slotId) {
		const key = recordingStore.constructor.buildKey(lessonId, dayIndex, taskId, slotId);
		const record = await recordingStore.load(key);
		if (!record) return null;
		const url = URL.createObjectURL(record.blob);
		this.#objectUrls.push(url);
		return { url, durationMs: record.durationMs };
	}

	async deleteClip(lessonId, dayIndex, taskId, slotId) {
		const key = recordingStore.constructor.buildKey(lessonId, dayIndex, taskId, slotId);
		await recordingStore.delete(key);
		this.#progress.removeRecordingMeta(lessonId, dayIndex, taskId, slotId);
	}

	hasClip(lessonId, dayIndex, taskId, slotId) {
		return this.#progress.hasRecording(lessonId, dayIndex, taskId, slotId);
	}

	getClipMeta(lessonId, dayIndex, taskId, slotId) {
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

export function setRecordingState(progressState) {
	return setContext(RECORDING_KEY, new RecordingState(progressState));
}

export function getRecordingState() {
	return getContext(RECORDING_KEY);
}
