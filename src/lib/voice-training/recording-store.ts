export interface ClipRecord {
	blob: Blob;
	mimeType: string;
	durationMs: number;
	createdAt: string;
	sizeBytes: number;
}

const DB_NAME = 'voice-training-recordings';
const STORE_NAME = 'clips';
const DB_VERSION = 1;

export function buildClipKey(
	lessonId: string,
	dayIndex: number,
	taskId: string,
	slotId = 'default'
): string {
	return `${lessonId}:${dayIndex}:${taskId}:${slotId}`;
}

class RecordingStore {
	#dbPromise: Promise<IDBDatabase | null> | null = null;

	async #open(): Promise<IDBDatabase | null> {
		if (this.#dbPromise) return this.#dbPromise;
		this.#dbPromise = new Promise<IDBDatabase | null>((resolve) => {
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

	async save(key: string, blob: Blob, durationMs: number): Promise<void> {
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
		return new Promise<void>((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readwrite');
			tx.objectStore(STORE_NAME).put(record, key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}

	async load(key: string): Promise<ClipRecord | null> {
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

	async delete(key: string): Promise<void> {
		const db = await this.#open();
		if (!db) return;
		return new Promise<void>((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readwrite');
			tx.objectStore(STORE_NAME).delete(key);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}

	async has(key: string): Promise<boolean> {
		const db = await this.#open();
		if (!db) return false;
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const request = tx.objectStore(STORE_NAME).count(IDBKeyRange.only(key));
			request.onsuccess = () => resolve(request.result > 0);
			request.onerror = () => reject(request.error);
		});
	}

	async getAllKeys(): Promise<IDBValidKey[]> {
		const db = await this.#open();
		if (!db) return [];
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_NAME, 'readonly');
			const request = tx.objectStore(STORE_NAME).getAllKeys();
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async getStorageEstimate(): Promise<StorageEstimate> {
		if (navigator.storage?.estimate) {
			return navigator.storage.estimate();
		}
		return { usage: 0, quota: 0 };
	}
}

export const recordingStore = new RecordingStore();
