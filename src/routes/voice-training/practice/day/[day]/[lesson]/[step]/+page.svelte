<script>
	import { goto } from '$app/navigation';
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { getWorkflowItems, getCourseDays, getScheduleForDay } from '$lib/voice-training/courseData';
	import { getRecordingState } from '$lib/voice-training/recording-state.svelte.js';
	import { linkify } from '$lib/voice-training/linkify.js';
	import RecordingTask from '$lib/voice-training/components/RecordingTask.svelte';
	import { vtBase } from '$lib/voice-training/paths.js';

	let { data } = $props();
	const progress = getProgressState();
	const recording = getRecordingState();

	const lesson = $derived(data.lesson);
	const session = $derived(data.session);
	const dayIndex = $derived(data.dayIndex);
	const step = $derived(data.step);

	const workflow = $derived(getWorkflowItems(lesson));
	const schedule = $derived(lesson.schedule ?? []);
	const lessonDay = $derived(session.lessonDay);
	const todayTaskIds = $derived(getScheduleForDay(lesson, lessonDay));
	const todayTasks = $derived(
		todayTaskIds.map((id) => workflow.find((t) => t.id === id)).filter(Boolean)
	);
	const currentTask = $derived(step <= todayTasks.length ? todayTasks[step - 1] : null);
	const isReview = $derived(progress.getLessonDay(lesson.id) > lessonDay);
	const hasNextSession = $derived(
		data.day.sessions.some(
			(s) => s.lessonId !== lesson.id && progress.getLessonDay(s.lessonId) <= s.lessonDay
		)
	);

	// Reference links from any 'links' task (shown during timer tasks)
	const referenceLinks = $derived(
		workflow
			.filter((t) => t.type === 'links')
			.flatMap((t) => progress.getLinks(lesson.id, t.id))
	);

	// --- Day navigation for review mode ---
	const courseDays = getCourseDays();

	const lessonDayIndices = $derived(
		courseDays
			.map((d, i) => (d.sessions.some((s) => s.lessonId === lesson.id) ? i : -1))
			.filter((i) => i >= 0)
	);
	const currentDayPos = $derived(lessonDayIndices.indexOf(dayIndex));
	const prevDay = $derived(currentDayPos > 0 ? lessonDayIndices[currentDayPos - 1] + 1 : null);
	const nextDay = $derived(
		currentDayPos < lessonDayIndices.length - 1
			? lessonDayIndices[currentDayPos + 1] + 1
			: null
	);

	// --- Is this specific task instance done? ---
	function isDone(task) {
		if (!task) return false;
		if (task.type === 'links') return progress.getLinks(lesson.id, task.id).length > 0;
		if (task.type === 'text')
			return progress.getInstanceText(lesson.id, lessonDay, task.id).trim().length > 0;
		if (task.type === 'recording') {
			if (!recording.available) return progress.isInstanceDone(lesson.id, lessonDay, task.id);
			const slots = task.slots ?? [{ id: 'default' }];
			return slots.every((s) => recording.hasClip(lesson.id, lessonDay, task.id, s.id));
		}
		return progress.isInstanceDone(lesson.id, lessonDay, task.id);
	}

	function finishDay() {
		if (!progress.testMode) progress.advanceLessonDay(lesson.id);

		// If there are more pending sessions today, go to the next one
		const day = data.day;
		const nextSession = day.sessions.find(
			(s) =>
				s.lessonId !== lesson.id &&
				progress.getLessonDay(s.lessonId) <= s.lessonDay
		);
		if (nextSession) {
			goto(`${vtBase}/practice/day/${dayIndex + 1}/${nextSession.lessonId}/1`);
		} else {
			goto(vtBase);
		}
	}

	// --- Step navigation ---
	function goNext() {
		goto(`${vtBase}/practice/day/${dayIndex + 1}/${lesson.id}/${step + 1}`);
	}

	function goBack() {
		if (step > 1) goto(`${vtBase}/practice/day/${dayIndex + 1}/${lesson.id}/${step - 1}`);
	}

	// --- Timer ---
	let timerRemaining = $state(0);
	let timerRunning = $state(false);
	let timerHandle = null;

	$effect(() => {
		const task = currentTask;
		timerRunning = false;
		if (timerHandle) {
			clearInterval(timerHandle);
			timerHandle = null;
		}
		if (task?.type === 'timer') {
			timerRemaining = task.timerSeconds;
		}
		return () => {
			if (timerHandle) clearInterval(timerHandle);
		};
	});

	function startTimer() {
		if (timerRunning || timerRemaining <= 0) return;
		timerRunning = true;
		timerHandle = setInterval(() => {
			if (timerRemaining <= 1) {
				clearInterval(timerHandle);
				timerHandle = null;
				timerRemaining = 0;
				timerRunning = false;
				progress.markInstanceDone(lesson.id, lessonDay, currentTask.id);
				return;
			}
			timerRemaining--;
		}, 1000);
	}

	function pauseTimer() {
		timerRunning = false;
		if (timerHandle) {
			clearInterval(timerHandle);
			timerHandle = null;
		}
	}

	function resetTimer() {
		pauseTimer();
		if (currentTask?.type === 'timer') {
			timerRemaining = currentTask.timerSeconds;
		}
	}

	function formatTime(seconds) {
		const safe = Math.max(0, Math.floor(seconds));
		const mm = String(Math.floor(safe / 60)).padStart(2, '0');
		const ss = String(safe % 60).padStart(2, '0');
		return `${mm}:${ss}`;
	}

	// --- Link draft ---
	let linkTitle = $state('');
	let linkUrl = $state('');

	function saveLink() {
		if (!linkUrl.trim() || !currentTask) return;
		progress.addLink(lesson.id, currentTask.id, linkTitle || 'Saved link', linkUrl);
		linkTitle = '';
		linkUrl = '';
	}
</script>

<svelte:head>
	<title>Practice — Ruten</title>
</svelte:head>

<nav class="crumbs">
	<a href={vtBase}>Home</a>
	<span>/</span>
	<a href={`${vtBase}/today`}>Today</a>
	<span>/</span>
	<span>Day {dayIndex + 1}</span>
	{#if currentTask}
		<span>/</span>
		<span>Step {step}</span>
	{/if}
</nav>

{#if step > todayTasks.length}
	<!-- Day complete / review end -->
	{#if lesson.recurring}
		<section class="hero-card practice-complete">
			<h1>Maintenance complete!</h1>
			<p>Daily warmup and health check done.</p>
			<button type="button" onclick={finishDay}>
				{hasNextSession ? 'Next Session' : 'Back to Home'}
			</button>
		</section>
	{:else if isReview}
		<section class="hero-card">
			<h1>Day {lessonDay + 1} of {schedule.length}</h1>
			<p class="muted">{lesson.title} &middot; Review complete</p>
		</section>
		<section class="course-card" style="text-align: center;">
			<a class="button-link" href={`${vtBase}/week/${lesson.weekId}/lesson/${lesson.id}`}>
				Back to Lesson
			</a>
		</section>
	{:else}
		<section class="hero-card practice-complete">
			<h1>Day {lessonDay + 1} complete!</h1>
			<p>You finished all tasks for {lesson.title} today.</p>
			<button type="button" onclick={finishDay}>
				{hasNextSession ? 'Next Session' : 'Back to Home'}
			</button>
		</section>
	{/if}

	{#if isReview && (prevDay || nextDay)}
		<div class="practice-nav">
			{#if prevDay}
				<a class="button-link" href={`${vtBase}/practice/day/${prevDay}/${lesson.id}/1`}>
					&larr; Prev Day
				</a>
			{/if}
			{#if nextDay}
				<a class="button-link" href={`${vtBase}/practice/day/${nextDay}/${lesson.id}/1`}>
					Next Day &rarr;
				</a>
			{/if}
		</div>
	{/if}
{:else if currentTask}
	<!-- Task view -->
	<section class="hero-card">
		{#if lesson.recurring}
			<h1>{lesson.title}</h1>
			<p class="muted">Daily practice</p>
		{:else}
			<h1>{isReview ? 'Review' : 'Practice'}: Day {lessonDay + 1} of {schedule.length}</h1>
			<p class="muted">{lesson.title}</p>
		{/if}

		<div class="step-dots">
			{#each todayTasks as task, i}
				<span class="dot" class:done={isDone(task)} class:active={i === step - 1}></span>
			{/each}
		</div>
	</section>

	<section class="course-card practice-card">
		<p class="muted">Step {step} of {todayTasks.length}</p>
		<h2>{currentTask.text}</h2>

		{#if currentTask.detail}
			<p class="task-detail">{@html linkify(currentTask.detail)}</p>
		{/if}

		{#if isReview}
			<!-- Review mode: read-only display -->
			{#if currentTask.type === 'timer'}
				<p class="timer-readout done-readout">Completed</p>
			{:else if currentTask.type === 'text'}
				{@const savedText = progress.getInstanceText(lesson.id, lessonDay, currentTask.id)}
				{#if savedText.trim()}
					<div class="review-text">{savedText}</div>
				{:else}
					<p class="muted">No response recorded</p>
				{/if}
			{:else if currentTask.type === 'links'}
				{@const links = progress.getLinks(lesson.id, currentTask.id)}
				{#if links.length > 0}
					<ul>
						{#each links as link}
							<li>
								<a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="muted">No links saved</p>
				{/if}
			{:else if currentTask.type === 'recording'}
				<RecordingTask
					task={currentTask}
					lessonId={lesson.id}
					dayIndex={lessonDay}
					isReview={true}
				/>
			{:else}
				{#if isDone(currentTask)}
					<p class="timer-readout done-readout">Completed</p>
				{:else}
					<p class="muted">Not completed</p>
				{/if}
			{/if}
		{:else}
			<!-- Active mode: interactive -->
			{#if currentTask.type === 'timer'}
				{#if isDone(currentTask)}
					<p class="timer-readout done-readout">Session complete</p>
				{:else}
					<p class="timer-readout">{formatTime(timerRemaining)}</p>
					<div class="control-row">
						<button
							type="button"
							onclick={startTimer}
							disabled={timerRunning || timerRemaining <= 0}
						>
							Start
						</button>
						<button type="button" onclick={pauseTimer} disabled={!timerRunning}>
							Pause
						</button>
						<button type="button" onclick={resetTimer}>Reset</button>
					</div>
				{/if}

				{#if referenceLinks.length > 0}
					<div class="reference-links">
						<p class="muted">Your reference voices:</p>
						<ul>
							{#each referenceLinks as link}
								<li>
									<a href={link.url} target="_blank" rel="noreferrer">
										{link.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{:else if currentTask.type === 'text'}
				<textarea
					rows="5"
					placeholder={currentTask.prompt ?? 'Write here...'}
					value={progress.getInstanceText(lesson.id, lessonDay, currentTask.id)}
					oninput={(e) =>
						progress.setInstanceText(
							lesson.id,
							lessonDay,
							currentTask.id,
							e.currentTarget.value
						)}
				></textarea>
			{:else if currentTask.type === 'links'}
				<div class="link-manager">
					<input type="text" placeholder="Title (optional)" bind:value={linkTitle} />
					<input type="url" placeholder="https://example.com" bind:value={linkUrl} />
					<button type="button" onclick={saveLink}>Save Link</button>

					{#if progress.getLinks(lesson.id, currentTask.id).length > 0}
						<ul class="saved-links">
							{#each progress.getLinks(lesson.id, currentTask.id) as link}
								<li>
									<a href={link.url} target="_blank" rel="noreferrer">
										{link.title}
									</a>
									<button
										type="button"
										class="small"
										onclick={() =>
											progress.removeLink(lesson.id, currentTask.id, link.id)}
									>
										Remove
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<p class="muted">
					{progress.getLinks(lesson.id, currentTask.id).length} links saved
				</p>
			{:else if currentTask.type === 'recording'}
				<RecordingTask
					task={currentTask}
					lessonId={lesson.id}
					dayIndex={lessonDay}
				/>
			{:else}
				{#if isDone(currentTask)}
					<p class="muted">Done</p>
				{:else}
					<button
						type="button"
						onclick={() =>
							progress.markInstanceDone(lesson.id, lessonDay, currentTask.id)}
					>
						I did this
					</button>
				{/if}
			{/if}
		{/if}
	</section>

	<div class="practice-nav">
		<button type="button" onclick={goBack} disabled={step === 1}>Back</button>
		<button
			type="button"
			onclick={goNext}
			disabled={!isReview && !isDone(currentTask) && !progress.testMode}
		>
			{step === todayTasks.length ? 'Finish' : 'Next'}
		</button>
	</div>

	{#if isReview}
		<div class="practice-nav" style="margin-top: 0.5rem;">
			{#if prevDay}
				<a class="button-link" href={`${vtBase}/practice/day/${prevDay}/${lesson.id}/1`}>
					&larr; Prev Day
				</a>
			{/if}
			{#if nextDay}
				<a class="button-link" href={`${vtBase}/practice/day/${nextDay}/${lesson.id}/1`}>
					Next Day &rarr;
				</a>
			{/if}
		</div>
	{/if}
{/if}
