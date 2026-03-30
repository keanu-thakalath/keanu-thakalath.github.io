<script>
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { getCourseDays } from '$lib/voice-training/courseData';
	import { vtBase } from '$lib/voice-training/paths.js';

	let { data } = $props();
	const progress = getProgressState();

	const week = $derived(data.week);
	const courseDays = getCourseDays();

	function isSessionDone(s) {
		return progress.getLessonDay(s.lessonId) > s.lessonDay;
	}

	const todayIndex = $derived(
		courseDays.findIndex((day) => day.sessions.some((s) => !isSessionDone(s)))
	);

	function lessonState(index) {
		if (progress.testMode) return 'active';
		const l = week.lessons[index];
		const firstDay = courseDays.findIndex((d) =>
			d.sessions.some((s) => s.lessonId === l.id)
		);
		if (todayIndex >= 0 && firstDay > todayIndex) return 'locked';
		if (progress.isLessonPracticeComplete(l.id, l)) return 'done';
		return 'active';
	}

</script>

<svelte:head>
	<title>Week {week.id}: {week.title} — Ruten</title>
</svelte:head>

<nav class="crumbs">
	<a href={vtBase}>Home</a>
	<span>/</span>
	<span>Week {week.id}</span>
</nav>

<section class="hero-card">
	<h1>Week {week.id}: {week.title}</h1>
	<p class="muted">{week.levelFocus}</p>
	<p>{week.overview}</p>
</section>

<section class="course-card">
	<h2>Week Outcomes</h2>
	<ul>
		{#each week.outcomes as outcome}
			<li>{outcome}</li>
		{/each}
	</ul>
</section>

<section class="card-grid">
	{#each week.lessons as lesson, index}
		{@const state = lessonState(index)}
		<article
			class="course-card"
			class:locked={state === 'locked'}
		>
			<h3><a href={`${vtBase}/week/${week.id}/lesson/${lesson.id}`}>Lesson {index + 1}: {lesson.title}</a></h3>
			<p class="muted">{lesson.difficulty} · {lesson.duration}</p>
			<p>{lesson.summary}</p>
			<p class="muted">Read: {progress.lessonDone(lesson.id) ? 'Yes' : 'No'}</p>
			<p class="muted">
				Practice: {progress.isLessonPracticeComplete(lesson.id, lesson)
					? 'Complete'
					: `Day ${progress.getLessonDay(lesson.id) + 1} of ${lesson.schedule?.length ?? 0}`}
			</p>
		</article>
	{/each}
</section>
