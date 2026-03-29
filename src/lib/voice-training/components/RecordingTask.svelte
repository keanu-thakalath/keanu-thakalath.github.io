<script>
	import { getRecordingState } from '$lib/voice-training/recording-state.svelte.js';
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import RecorderWidget from './RecorderWidget.svelte';
	import PlaybackWidget from './PlaybackWidget.svelte';

	let { task, lessonId, dayIndex, isReview = false } = $props();

	const rec = getRecordingState();
	const progress = getProgressState();

	const slots = $derived(task.slots ?? [{ id: 'default', label: 'Recording' }]);

	// Load compareWith reference clip
	let compareUrl = $state(null);
	let compareDuration = $state(0);
	let compareLabel = $state('');

	$effect(() => {
		if (task.compareWith) {
			const cw = task.compareWith;
			rec.loadClip(cw.lessonId, cw.dayIndex ?? 0, cw.taskId, cw.slotId ?? 'default').then(
				(result) => {
					if (result) {
						compareUrl = result.url;
						compareDuration = result.durationMs;
						compareLabel = cw.label ?? 'Your baseline';
					}
				}
			);
		}
	});

	// Fallback: "I did this" for when recording is unavailable
	function markDone() {
		progress.markInstanceDone(lessonId, dayIndex, task.id);
	}

	const fallbackDone = $derived(progress.isInstanceDone(lessonId, dayIndex, task.id));
</script>

{#if !rec.available}
	<!-- Fallback when recording is not available -->
	<p class="muted">Recording is not available in this browser. Record externally and mark complete.</p>
	{#if isReview}
		{#if fallbackDone}
			<p class="muted">Done</p>
		{:else}
			<p class="muted">Not completed</p>
		{/if}
	{:else if fallbackDone}
		<p class="muted">Done</p>
	{:else}
		<button type="button" onclick={markDone}>I did this</button>
	{/if}
{:else}
	{#if compareUrl}
		<div class="compare-reference">
			<PlaybackWidget objectUrl={compareUrl} durationMs={compareDuration} label={compareLabel} />
		</div>
	{/if}

	<div class="recording-slots" class:multi={slots.length > 1}>
		{#each slots as slot}
			<RecorderWidget
				{lessonId}
				{dayIndex}
				taskId={task.id}
				slotId={slot.id}
				label={slot.label}
				readonly={isReview}
			/>
		{/each}
	</div>
{/if}
