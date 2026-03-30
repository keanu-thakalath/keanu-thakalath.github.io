<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Keanu Thakalath</title>
</svelte:head>

<div class="page error-page">
	<h1 class="error-code">{page.status}</h1>
	<p class="error-message">
		{#if page.status === 404}
			this page doesn't exist.
		{:else}
			something went wrong.
		{/if}
	</p>
	<a class="error-link" href="/">back home</a>
</div>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 60vh;
	}

	.error-code {
		font-size: 5rem;
		font-weight: 700;
		margin: 0;
		color: var(--color-primary);
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.error-message {
		font-size: 1.15rem;
		color: var(--color-text-muted);
		margin: 0.75rem 0 1.5rem;
	}

	.error-link {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-primary);
	}

	.error-link:hover {
		text-decoration: underline;
	}
</style>
