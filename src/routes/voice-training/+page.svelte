<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { course } from '$lib/voice-training/courseData';
	import { vtBase } from '$lib/voice-training/paths.js';

	const progress = getProgressState();

	if (browser && !progress.courseStarted && !progress.testMode) {
		goto(`${vtBase}/intro`, { replaceState: true });
	}

	function isWeekComplete(week) {
		return week.lessons.every(
			(l) => progress.lessonDone(l.id) && progress.isLessonPracticeComplete(l.id, l)
		);
	}

	// Active week = first week that isn't fully complete
	const activeWeekIndex = $derived(course.weeks.findIndex((w) => !isWeekComplete(w)));

	function weekState(index) {
		if (progress.testMode) return 'active';
		if (activeWeekIndex === -1) return 'done'; // everything complete
		if (index < activeWeekIndex) return 'done';
		if (index === activeWeekIndex) return 'active';
		return 'locked';
	}

	function completedForWeek(week) {
		return week.lessons.filter((l) => progress.lessonDone(l.id)).length;
	}

	const hasWork = $derived(progress.testMode || activeWeekIndex !== -1);
</script>

<section class="hero-card">
	<h1>{course.title}</h1>
	<p>{course.subtitle}</p>

	{#if hasWork}
		<a class="button-link practice-cta" href={`${vtBase}/today`}>Today</a>
	{/if}
</section>

<section class="card-grid">
	{#each course.weeks as week, index}
		{@const state = weekState(index)}
		<article class="course-card" class:locked={state === 'locked'}>
			<h2><a href={`${vtBase}/week/${week.id}`}>Week {week.id}: {week.title}</a></h2>
			<p class="muted">{week.levelFocus}</p>
			<p>{week.overview}</p>
			<p class="muted">Lessons: {completedForWeek(week)}/{week.lessons.length}</p>
		</article>
	{/each}
</section>
