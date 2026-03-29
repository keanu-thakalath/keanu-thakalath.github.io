<script>
	import '$lib/voice-training/app.css';
	import { browser } from '$app/environment';
	import { setProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { setRecordingState } from '$lib/voice-training/recording-state.svelte.js';
	import { vtBase } from '$lib/voice-training/paths.js';

	const testMode = browser && new URL(window.location.href).searchParams.has('test');
	const progress = setProgressState(testMode);
	setRecordingState(progress);

	let { children } = $props();
</script>

<div class="site-shell">
	{#if progress.testMode}
		<div class="test-banner">
			Test Mode — nothing is saved
			<a href={vtBase}>Exit</a>
		</div>
	{/if}
	<header class="topbar">
		<a href={vtBase} class="brand">Voice Training Course</a>
	</header>
	<main class="content">
		{@render children()}
	</main>
</div>
