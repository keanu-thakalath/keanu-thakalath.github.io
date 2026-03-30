<script lang="ts">
	let {
		objectUrl,
		durationMs = 0,
		label = ''
	}: { objectUrl: string; durationMs?: number; label?: string } = $props();

	let audioEl: HTMLAudioElement | null = $state(null);
	let playing = $state(false);
	let currentTime = $state(0);
	let knownDuration = $state(0);
	const duration = $derived(knownDuration || durationMs / 1000);

	function tryUpdateDuration() {
		if (audioEl?.duration && isFinite(audioEl.duration) && audioEl.duration > 0) {
			knownDuration = audioEl.duration;
		}
	}

	function toggle() {
		if (!audioEl) return;
		if (playing) {
			audioEl.pause();
		} else {
			audioEl.play();
		}
	}

	function onTimeUpdate() {
		currentTime = audioEl?.currentTime ?? 0;
		tryUpdateDuration();
	}

	function onLoadedMetadata() {
		tryUpdateDuration();
	}

	function onDurationChange() {
		tryUpdateDuration();
	}

	function onEnded() {
		if (!knownDuration && audioEl && audioEl.currentTime > 0) {
			knownDuration = audioEl.currentTime;
		}
		playing = false;
		currentTime = 0;
	}

	function onPlay() {
		playing = true;
	}

	function onPause() {
		playing = false;
	}

	function seek(e: MouseEvent) {
		const target = e.currentTarget;
		if (!(target instanceof HTMLElement) || !audioEl || !duration) return;
		const rect = target.getBoundingClientRect();
		const pct = (e.clientX - rect.left) / rect.width;
		audioEl.currentTime = pct * duration;
	}

	function formatTime(s: number) {
		const safe = Math.max(0, Math.floor(s));
		const mm = String(Math.floor(safe / 60)).padStart(2, '0');
		const ss = String(safe % 60).padStart(2, '0');
		return `${mm}:${ss}`;
	}

	const progress = $derived(duration > 0 ? currentTime / duration : 0);
</script>

<div class="playback-widget">
	{#if label}
		<p class="playback-label">{label}</p>
	{/if}
	<audio
		bind:this={audioEl}
		src={objectUrl}
		ontimeupdate={onTimeUpdate}
		onloadedmetadata={onLoadedMetadata}
		ondurationchange={onDurationChange}
		onended={onEnded}
		onplay={onPlay}
		onpause={onPause}
	></audio>
	<div class="playback-controls">
		<button type="button" class="play-btn" onclick={toggle}>
			{playing ? '⏸' : '▶'}
		</button>
		<span class="playback-time">{formatTime(currentTime)}</span>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="playback-bar" onclick={seek}>
			<div class="playback-bar-fill" style="width: {progress * 100}%"></div>
		</div>
		<span class="playback-time">{formatTime(duration)}</span>
	</div>
</div>
