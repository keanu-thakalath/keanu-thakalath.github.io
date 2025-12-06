import type { Component } from 'svelte';

export interface PostMetadata {
	title: string;
	date: string;
}
export interface Post {
	metadata: PostMetadata;
	default: Component;
}

// Type guard for PostMetadata
function isPostMetadata(obj: unknown): obj is PostMetadata {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		'title' in obj &&
		'date' in obj &&
		typeof obj.title === 'string' &&
		typeof obj.date === 'string' &&
		obj.title.trim().length > 0
	);
}

// Type guard for Post
function isPost(obj: unknown): obj is Post {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		'metadata' in obj &&
		'default' in obj &&
		isPostMetadata(obj.metadata) &&
		typeof obj.default === 'function' // Svelte components are functions
	);
}

// Date validation helper
function validateDateString(dateStr: string, context: string): void {
	if (dateStr.trim().length === 0) {
		throw new Error(`${context}: metadata.date cannot be empty`);
	}

	const date = new Date(dateStr);
	if (isNaN(date.getTime())) {
		throw new Error(
			`${context}: metadata.date "${dateStr}" is not a valid date. ` +
				`Expected format: YYYY-MM-DD (e.g., "2021-12-14")`
		);
	}

	// Warn for unusual years (catches typos)
	const year = date.getFullYear();
	if (year < 2000 || year > 2100) {
		console.warn(
			`${context}: metadata.date year ${year} seems unusual. ` +
				`Double-check for typos.`
		);
	}
}

// Main validation function (export this)
export function validatePost(obj: unknown, context: string): Post {
	if (!isPost(obj)) {
		const errors: string[] = [];

		if (typeof obj !== 'object' || obj === null) {
			throw new Error(`${context}: Expected post object, got ${typeof obj}`);
		}

		if (!('metadata' in obj)) {
			errors.push('missing "metadata" property');
		} else {
			const metadata = obj.metadata;
			if (typeof metadata !== 'object' || metadata === null) {
				errors.push('metadata must be an object');
			} else {
				if (!('title' in metadata)) {
					errors.push('metadata missing "title"');
				} else if (typeof metadata.title !== 'string') {
					errors.push(`metadata.title must be string, got ${typeof metadata.title}`);
				} else if (typeof metadata.title === 'string' && metadata.title.trim().length === 0) {
					errors.push('metadata.title cannot be empty');
				}

				if (!('date' in metadata)) {
					errors.push('metadata missing "date"');
				} else if (typeof metadata.date !== 'string') {
					errors.push(`metadata.date must be string, got ${typeof metadata.date}`);
				}
			}
		}

		if (!('default' in obj)) {
			errors.push('missing "default" component');
		} else if (typeof obj.default !== 'function') {
			errors.push(`"default" must be a component (function), got ${typeof obj.default}`);
		}

		throw new Error(`${context}: Invalid post structure:\n  - ${errors.join('\n  - ')}`);
	}

	// Validate date is parseable
	validateDateString(obj.metadata.date, context);

	return obj;
}
