<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Keanu Thakalath</title>
</svelte:head>

<article class="post">
	<h1>{data.title}</h1>
	<p class="date">{data.date}</p>
	<data.Content />
</article>
