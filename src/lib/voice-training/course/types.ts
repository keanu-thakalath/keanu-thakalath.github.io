export interface WorkflowTask {
	id: string;
	type: string;
	text: string;
	detail?: string;
	timerSeconds?: number;
	prompt?: string;
	slots?: Array<{ id: string; label: string }>;
	compareWith?: {
		lessonId: string;
		dayIndex: number;
		taskId: string;
		slotId: string;
		label: string;
	};
}

export interface WorkflowItem extends WorkflowTask {
	target: number;
}

export interface Lesson {
	id: string;
	title: string;
	weekId?: number | null;
	weekTitle?: string | null;
	lessonNumber?: number | null;
	difficulty?: string;
	duration?: string;
	summary?: string;
	sections?: Array<{ heading: string; body: string[] }>;
	practice?: string[];
	homework?: Array<{ id: string; text: string; type: string }>;
	workflow?: WorkflowTask[];
	schedule?: string[][];
	recurring?: boolean;
	startAfterLesson?: string;
}
