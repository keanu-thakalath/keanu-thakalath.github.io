<script>
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { getWorkflowItems, getCourseDays } from '$lib/voice-training/courseData';
	import { linkify } from '$lib/voice-training/linkify.js';
	import { vtBase } from '$lib/voice-training/paths.js';

	let { data } = $props();
	const progress = getProgressState();

	const lesson = $derived(data.lesson);
	const workflow = $derived(getWorkflowItems(lesson));
	const schedule = $derived(lesson.schedule ?? []);

	const currentDay = $derived(progress.getLessonDay(lesson.id));
	const allComplete = $derived(progress.isLessonPracticeComplete(lesson.id, lesson));

	const courseDays = getCourseDays();

	function isSessionDone(s) {
		return progress.getLessonDay(s.lessonId) > s.lessonDay;
	}

	const todayIndex = $derived(
		courseDays.findIndex((day) => day.sessions.some((s) => !isSessionDone(s)))
	);
	const firstPracticeDay = $derived(
		courseDays.findIndex((d) => d.sessions.some((s) => s.lessonId === lesson.id)) + 1
	);
	const isLocked = $derived(
		!progress.testMode && todayIndex >= 0 && firstPracticeDay - 1 > todayIndex
	);
	const nextPracticeDay = $derived(
		courseDays.findIndex((d) =>
			d.sessions.some(
				(s) => s.lessonId === lesson.id && progress.getLessonDay(lesson.id) <= s.lessonDay
			)
		) + 1
	);
</script>

<svelte:head>
	<title>{lesson.title} — Ruten</title>
</svelte:head>

<nav class="crumbs">
	<a href={vtBase}>Home</a>
	<span>/</span>
	<a href={`${vtBase}/week/${lesson.weekId}`}>Week {lesson.weekId}</a>
	<span>/</span>
	<span>{lesson.title}</span>
</nav>

<section class="hero-card">
	<h1>{lesson.title}</h1>
	<p class="muted">Week {lesson.weekId}: {lesson.weekTitle}</p>
	<p class="muted">{lesson.difficulty} · {lesson.duration}</p>
	<p>{lesson.summary}</p>
</section>

<section class="course-card">
	{#each lesson.sections as section}
		<article class="section-block">
			<h3>{section.heading}</h3>
			{#each section.body as paragraph}
				<p>{@html linkify(paragraph)}</p>
			{/each}
		</article>
	{/each}
</section>

<section class="course-card">
	<h2>Practice</h2>
	{#if allComplete}
		<p class="muted">All {schedule.length} days complete</p>
	{:else}
		<p class="muted">Day {currentDay + 1} of {schedule.length}</p>
	{/if}

	<ul class="task-summary">
		{#each workflow as task}
			{@const count =
				task.type === 'links'
					? progress.getLinks(lesson.id, task.id).length > 0
						? 1
						: 0
					: progress.taskInstancesDone(lesson.id, task.id, task.type, schedule)}
			{@const done = count >= task.target}
			<li class:complete={done}>
				<span class="status-dot" class:done></span>
				<span>{task.text}</span>
				{#if task.target > 1}
					<span class="muted">{count}/{task.target}</span>
				{:else}
					<span class="muted">{done ? 'Done' : ''}</span>
				{/if}
			</li>
		{/each}
	</ul>

	{#if isLocked}
		<button type="button" class="button-link" disabled>Start Today's Practice</button>
	{:else}
		<a
			class="button-link"
			href={allComplete
				? `${vtBase}/practice/day/${firstPracticeDay}/${lesson.id}/1`
				: `${vtBase}/practice/day/${nextPracticeDay}/${lesson.id}/1`}
			onclick={() => {
				if (!progress.lessonDone(lesson.id)) progress.toggleLesson(lesson.id);
			}}
		>
			{allComplete ? 'Review Practice' : "Start Today's Practice"}
		</a>
	{/if}
</section>
