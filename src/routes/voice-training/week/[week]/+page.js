import { error } from '@sveltejs/kit';
import { course, getWeek } from '$lib/voice-training/courseData';

export function entries() {
	return course.weeks.map((week) => ({ week: String(week.id) }));
}

export function load({ params }) {
	const week = getWeek(params.week);
	if (!week) {
		throw error(404, 'Week not found');
	}

	return { week };
}
