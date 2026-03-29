<script>
	import { getRecordingState } from '$lib/voice-training/recording-state.svelte.js';
	import PlaybackWidget from './PlaybackWidget.svelte';

	let { lessonId, dayIndex, taskId, slotId = 'default', label = 'Recording', readonly = false } =
		$props();

	const rec = getRecordingState();
	const myKey = `${lessonId}:${dayIndex}:${taskId}:${slotId}`;
	const isMyRecording = $derived(rec.isRecording && rec.activeSlotKey === myKey);

	let clipUrl = $state(null);
	let clipDuration = $state(0);
	let hasClip = $state(false);
	let loading = $state(true);
	let error = $state(null);

	// Load existing clip on mount
	$effect(() => {
		loading = true;
		hasClip = rec.hasClip(lessonId, dayIndex, taskId, slotId);
		if (hasClip) {
			rec.loadClip(lessonId, dayIndex, taskId, slotId).then((result) => {
				if (result) {
					clipUrl = result.url;
					clipDuration = result.durationMs;
				}
				loading = false;
			});
		} else {
			clipUrl = null;
			clipDuration = 0;
			loading = false;
		}
	});

	async function startRecording() {
		error = null;
		await rec.startRecording(myKey);
		if (rec.micPermission === 'denied') {
			error = 'Microphone access denied. Check your browser settings.';
		}
	}

	async function stopRecording() {
		const result = await rec.stopRecording();
		if (!result) return;
		try {
			await rec.saveClip(lessonId, dayIndex, taskId, slotId, result.blob, result.durationMs);
			clipUrl = URL.createObjectURL(result.blob);
			clipDuration = result.durationMs;
			hasClip = true;
			error = null;
		} catch (e) {
			if (e.name === 'QuotaExceededError') {
				error = 'Storage full. Try deleting old recordings.';
			} else {
				error = 'Failed to save recording.';
			}
		}
	}

	async function reRecord() {
		await rec.deleteClip(lessonId, dayIndex, taskId, slotId);
		clipUrl = null;
		clipDuration = 0;
		hasClip = false;
	}

	function formatElapsed(s) {
		const mm = String(Math.floor(s / 60)).padStart(2, '0');
		const ss = String(s % 60).padStart(2, '0');
		return `${mm}:${ss}`;
	}
</script>

<div class="recorder-widget">
	<p class="recorder-label">{label}</p>

	{#if loading}
		<p class="muted">Loading...</p>
	{:else if hasClip && clipUrl}
		<PlaybackWidget objectUrl={clipUrl} durationMs={clipDuration} />
		{#if !readonly}
			<button type="button" class="small" onclick={reRecord}>Re-record</button>
		{/if}
	{:else if isMyRecording}
		<div class="recording-indicator">
			<span class="rec-dot"></span>
			<span class="rec-time">{formatElapsed(rec.elapsed)}</span>
		</div>
		<button type="button" onclick={stopRecording}>Stop</button>
	{:else}
		<button type="button" onclick={startRecording} disabled={rec.isRecording}>Record</button>
	{/if}

	{#if error}
		<p class="recording-error">{error}</p>
	{/if}
</div>
