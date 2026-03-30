import { error } from '@sveltejs/kit';
import type { PageLoadEvent } from './$types';
import { getCourseDays, getAllLessons, getScheduleForDay } from '$lib/voice-training/courseData';

const courseDays = getCourseDays();
const allLessons = getAllLessons();

export function entries() {
	const result = [];
	for (let d = 0; d < courseDays.length; d++) {
		const day = courseDays[d];
		for (const session of day.sessions) {
			const lesson = allLessons.find((l) => l.id === session.lessonId);
			if (!lesson) continue;
			const taskIds = getScheduleForDay(lesson, session.lessonDay);
			for (let s = 1; s <= taskIds.length; s++) {
				result.push({
					day: String(d + 1),
					lesson: session.lessonId,
					step: String(s)
				});
			}
		}
	}
	return result;
}

export function load({ params }: PageLoadEvent) {
	const dayIndex = parseInt(params.day) - 1;
	const lessonId = params.lesson;
	const step = parseInt(params.step);

	const day = courseDays[dayIndex];
	if (!day) throw error(404, 'Day not found');

	const session = day.sessions.find((s) => s.lessonId === lessonId);
	if (!session) throw error(404, 'Session not found');

	const lesson = allLessons.find((l) => l.id === lessonId);
	if (!lesson) throw error(404, 'Lesson not found');

	return { dayIndex, day, lesson, session, step };
}
