<script lang="ts">
	import { fade } from 'svelte/transition';
	import '../styles/global.css';

	let { children, data } = $props();
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</main>
{/key}

<footer class="site-footer">
	<div>
		<a href="/">Home</a>
		<span class="footer-sep">&middot;</span>
		<a href="/voice-training">Ruten</a>
		{#if !data.currentRoute?.startsWith('/voice-training')}
			<span class="footer-sep">&middot;</span>
			<a href="https://yomisensei.net" target="_blank" rel="noreferrer">Yomi Sensei</a>
			<span class="footer-sep">&middot;</span>
			<a href="https://linkedin.com/in/keanu-thakalath" target="_blank" rel="noreferrer">LinkedIn</a
			>
		{/if}
	</div>
	{#if data.currentRoute?.startsWith('/voice-training')}
		<div>
			<a href="/voice-training/intro">About this course</a>
			<span class="footer-sep">&middot;</span>
			<a
				href="https://old.reddit.com/r/transvoice/comments/d3cqqm/ls_voice_training_guide_level_4_for_mtf/"
				target="_blank"
				rel="noreferrer">Original guide on Reddit</a
			>
		</div>
	{/if}
</footer>
