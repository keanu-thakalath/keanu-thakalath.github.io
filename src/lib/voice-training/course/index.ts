import week1 from './week1.js';
import week2 from './week2.js';
import week3 from './week3.js';
import week4 from './week4.js';
import week5 from './week5.js';
import week6 from './week6.js';
import week7 from './week7.js';
import week8 from './week8.js';
import week9 from './week9.js';
import week10 from './week10.js';
import { recurring } from './recurring.js';

export const course = {
	title: 'Ruten',
	subtitle: 'Weekly overviews, full lesson writeups, and trackable homework.',
	weeks: [week1, week2, week3, week4, week5, week6, week7, week8, week9, week10],
	recurring
};

export type { Lesson, WorkflowTask, WorkflowItem } from './types.js';
export {
	getAllLessons,
	getWeek,
	getLesson,
	getWorkflowItems,
	getScheduleForDay,
	getCourseDays,
	getHomeworkItems,
	getPracticeItems
} from './helpers.js';
