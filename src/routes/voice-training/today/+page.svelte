<script>
	import { goto } from '$app/navigation';
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { getAllLessons, getCourseDays } from '$lib/voice-training/courseData';
	import { vtBase } from '$lib/voice-training/paths.js';

	const progress = getProgressState();
	const allLessons = getAllLessons();
	const courseDays = getCourseDays();

	function isSessionDone(session) {
		return progress.getLessonDay(session.lessonId) > session.lessonDay;
	}

	const todayIndex = $derived(
		courseDays.findIndex((day) => day.sessions.some((s) => !isSessionDone(s)))
	);
	const today = $derived(todayIndex >= 0 ? courseDays[todayIndex] : null);

	// New lessons to read today
	const unreadNewLessons = $derived(
		today ? today.newReads.filter((id) => !progress.lessonDone(id)) : []
	);

	// Incomplete practice sessions for today
	const pendingSessions = $derived(today ? today.sessions.filter((s) => !isSessionDone(s)) : []);

	const allDone = $derived(!today);

	function startFlow() {
		if (unreadNewLessons.length > 0) {
			const lesson = allLessons.find((l) => l.id === unreadNewLessons[0]);
			goto(`${vtBase}/week/${lesson.weekId}/lesson/${lesson.id}`);
			return;
		}
		if (pendingSessions.length > 0) {
			const s = pendingSessions[0];
			goto(`${vtBase}/practice/day/${todayIndex + 1}/${s.lessonId}/1`);
		}
	}
</script>

<svelte:head>
	<title>Today — Ruten</title>
</svelte:head>

<nav class="crumbs">
	<a href={vtBase}>Home</a>
	<span>/</span>
	<span>Today</span>
</nav>

{#if allDone}
	<section class="hero-card practice-complete">
		<h1>All caught up!</h1>
		<p>No pending lessons or practice. Check back tomorrow.</p>
		<a class="button-link" href={vtBase}>Back to Home</a>
	</section>
{:else}
	<section class="hero-card">
		<h1>Today</h1>
		<p class="muted">Day {todayIndex + 1} of {courseDays.length}</p>
	</section>

	<section class="course-card">
		<ul class="task-summary">
			{#each unreadNewLessons as lessonId (lessonId)}
				{@const lessonInfo = allLessons.find((l) => l.id === lessonId)}
				<li>
					<span class="status-dot"></span>
					<span>Read: {lessonInfo.title}</span>
					<span class="muted">New lesson</span>
				</li>
			{/each}
			{#each pendingSessions as session (session.lessonId)}
				{@const lessonInfo = allLessons.find((l) => l.id === session.lessonId)}
				<li>
					<span class="status-dot"></span>
					{#if lessonInfo.recurring}
						<span>{lessonInfo.title}</span>
						<span class="muted">Daily practice</span>
					{:else}
						<span>Practice: {lessonInfo.title}</span>
						<span class="muted">
							Day {session.lessonDay + 1} of {lessonInfo.schedule?.length ?? 0}
						</span>
					{/if}
				</li>
			{/each}
		</ul>

		<button type="button" onclick={startFlow} class="practice-cta">
			{unreadNewLessons.length > 0 ? 'Read Lesson' : 'Start Practice'}
		</button>
	</section>
{/if}
