import { course } from './index.js';
import type { Lesson, WorkflowItem } from './types.js';

export function getAllLessons(): Lesson[] {
	const lessons: Lesson[] = course.weeks.flatMap((week) =>
		week.lessons.map((lesson, index) => ({
			...lesson,
			weekId: week.id,
			weekTitle: week.title,
			lessonNumber: index + 1
		}))
	);

	for (const rec of course.recurring ?? []) {
		lessons.push({
			...rec,
			weekId: null,
			weekTitle: null,
			lessonNumber: null
		});
	}

	return lessons;
}

export function getWeek(weekId: string | number) {
	return course.weeks.find((week) => String(week.id) === String(weekId));
}

export function getLesson(weekId: string | number, lessonId: string): Lesson | null {
	const rec = (course.recurring ?? []).find((r) => r.id === lessonId);
	if (rec) return { ...rec, weekId: null, weekTitle: null };

	const week = getWeek(weekId);
	if (!week) return null;
	const lesson = week.lessons.find((item) => item.id === lessonId);
	if (!lesson) return null;

	return {
		...lesson,
		weekId: week.id,
		weekTitle: week.title
	};
}

function toId(text: string, prefix: string) {
	const slug = text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')
		.slice(0, 48);
	return `${prefix}-${slug || 'item'}`;
}

function firstNumber(text: string) {
	const match = text.match(/(\d+)/);
	return match ? Number(match[1]) : null;
}

function inferHomeworkTarget(item: { target?: number; text: string; type?: string }) {
	if (typeof item.target === 'number') return item.target;
	const text = item.text.toLowerCase();
	if (item.type === 'links') return 2;
	if (text.includes('at least 5 days') || text.includes('5 days')) return 5;
	if (text.includes('daily') || text.includes('every day')) return 5;
	if (
		text.includes('weekly') ||
		text.includes('one') ||
		text.includes('baseline clip') ||
		text.includes('best effort') ||
		text.includes('maintenance plan')
	)
		return 1;
	if (text.includes('3 ') || text.includes('three')) return 3;
	if (text.includes('2 ') || text.includes('two')) return 2;
	return 3;
}

function inferPracticeTarget(text: string) {
	const value = firstNumber(text);
	if (text.toLowerCase().includes('daily') || text.toLowerCase().includes('every day')) return 5;
	if (value && value <= 7) return value;
	return 1;
}

function inferPracticeDurationSeconds(text: string) {
	const lower = text.toLowerCase();
	const range = lower.match(/(\d+)\s*-\s*(\d+)\s*min/);
	if (range) return Number(range[1]) * 60;
	const minuteMatch = lower.match(/(\d+)\s*min/);
	if (minuteMatch) return Number(minuteMatch[1]) * 60;
	return 300;
}

export function getWorkflowItems(lesson: Lesson): WorkflowItem[] {
	const schedule = lesson.schedule ?? [];
	return (lesson.workflow ?? []).map((task) => ({
		...task,
		target: schedule.filter((day) => day.includes(task.id)).length,
		...(task.type === 'recording' && !task.slots
			? { slots: [{ id: 'default', label: 'Recording' }] }
			: {})
	}));
}

/**
 * Returns the tasks for a given lesson day, handling recurring lessons
 * that cycle through the same schedule indefinitely.
 */
export function getScheduleForDay(lesson: Lesson, lessonDay: number): string[] {
	const schedule = lesson.schedule ?? [];
	if (schedule.length === 0) return [];
	if (lesson.recurring) return schedule[lessonDay % schedule.length] ?? [];
	return lessonDay < schedule.length ? schedule[lessonDay] : [];
}

/**
 * Returns the full course day schedule. Each entry represents one calendar day:
 * { weekId, newReads: [lessonId], sessions: [{lessonId, lessonDay}] }
 *
 * Within a week, lesson i starts on offset i (one new lesson per day).
 * Practice sessions run in parallel after that.
 * Recurring task groups are injected starting the day after their source
 * lesson's practice ends.
 */
export function getCourseDays() {
	const days = [];
	const readSoFar = [];

	for (const week of course.weeks) {
		const metas = week.lessons.map((lesson, i) => ({
			id: lesson.id,
			startOffset: i,
			scheduleLength: (lesson.schedule ?? []).length
		}));

		const weekLength = Math.max(...metas.map((m) => m.startOffset + m.scheduleLength));

		for (let d = 0; d < weekLength; d++) {
			const newReads = [];
			const sessions = [];

			for (const m of metas) {
				if (d === m.startOffset) {
					newReads.push(m.id);
					readSoFar.push(m.id);
				}
				const lessonDay = d - m.startOffset;
				if (lessonDay >= 0 && lessonDay < m.scheduleLength) {
					sessions.push({ lessonId: m.id, lessonDay });
				}
			}

			days.push({
				weekId: week.id,
				readLessons: [...readSoFar],
				newReads,
				sessions
			});
		}
	}

	// Inject recurring sessions after source lesson practice ends
	for (const rec of course.recurring ?? []) {
		let lastPracticeDay = -1;
		for (let i = 0; i < days.length; i++) {
			if (days[i].sessions.some((s) => s.lessonId === rec.startAfterLesson)) {
				lastPracticeDay = i;
			}
		}

		let recurringDay = 0;
		for (let i = lastPracticeDay + 1; i < days.length; i++) {
			days[i].sessions.push({
				lessonId: rec.id,
				lessonDay: recurringDay++
			});
		}
	}

	return days;
}

export function getHomeworkItems(lesson: Lesson) {
	return (lesson.homework ?? []).map((item) => ({
		...item,
		target: inferHomeworkTarget(item)
	}));
}

export function getPracticeItems(lesson: Lesson) {
	return (lesson.practice ?? []).map((text) => ({
		id: toId(text, 'drill'),
		text,
		target: inferPracticeTarget(text),
		timerSeconds: inferPracticeDurationSeconds(text)
	}));
}
