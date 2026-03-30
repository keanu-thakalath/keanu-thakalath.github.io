const DB_NAME = 'voice-training-recordings';
const STORE_NAME = 'clips';
const DB_VERSION = 1;

class RecordingStore {
	#dbPromise = null;

	static buildKey(lessonId, dayIndex, taskId, slotId = 'default') {
		return `${lessonId}:${dayIndex}:${taskId}:${slotId}`;
	}

	async #open() {
		if (this.#dbPromise) return this.#dbPromise;
		this.#dbPromise = new Promise((resolve) => {
			if (typeof indexedDB === 'undefined') {
				resolve(null);
				return;
			}
			const request = indexedDB.open(DB_NAME, DB_VERSION);
			request.onupgradeneeded = () => {
				request.result.createObjectStore(STORE_NAME);
			};
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => {
				console.warn('IndexedDB unavailable:', request.error);
				resolve(null);
			};
		});
		return this.#dbPromise;
	}

	async save(key, blob, durationMs) {
		const db = await this.#open();
		if (!db) return;
		const buffer = await blob.arrayBuffer();
		const record = {
			buffer,
			mimeType: blob.type,
			durationMs,
			createdAt: new Date().toISOString(),
			sizeBytes: blob.size
		};
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readwrite');
			tx.objectStore(STORE_NAME).put(record, key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}

	async load(key) {
		const db = await this.#open();
		if (!db) return null;
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const request = tx.objectStore(STORE_NAME).get(key);
			request.onsuccess = () => {
				const record = request.result;
				if (!record) {
					resolve(null);
					return;
				}
				resolve({
					blob: new Blob([record.buffer], { type: record.mimeType }),
					mimeType: record.mimeType,
					durationMs: record.durationMs,
					createdAt: record.createdAt,
					sizeBytes: record.sizeBytes
				});
			};
			request.onerror = () => reject(request.error);
		});
	}

	async delete(key) {
		const db = await this.#open();
		if (!db) return;
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readwrite');
			tx.objectStore(STORE_NAME).delete(key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}

	async has(key) {
		const db = await this.#open();
		if (!db) return false;
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const request = tx.objectStore(STORE_NAME).count(IDBKeyRange.only(key));
			request.onsuccess = () => resolve(request.result > 0);
			request.onerror = () => reject(request.error);
		});
	}

	async getAllKeys() {
		const db = await this.#open();
		if (!db) return [];
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const request = tx.objectStore(STORE_NAME).getAllKeys();
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async getStorageEstimate() {
		if (navigator.storage?.estimate) {
			return navigator.storage.estimate();
		}
		return { usage: 0, quota: 0 };
	}
}

export const recordingStore = new RecordingStore();
