import { error } from '@sveltejs/kit';
import { course, getLesson } from '$lib/voice-training/courseData';

export function entries() {
  return course.weeks.flatMap((week) =>
    week.lessons.map((lesson) => ({
      week: String(week.id),
      lesson: lesson.id
    }))
  );
}

export function load({ params }) {
  const lesson = getLesson(params.week, params.lesson);

  if (!lesson) {
    throw error(404, 'Lesson not found');
  }

  return { lesson };
}
