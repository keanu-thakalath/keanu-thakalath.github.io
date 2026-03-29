<script>
	let { data } = $props();
</script>

<article class="post">
	<h1>{data.title}</h1>
	<p class="date">{data.date}</p>
	<data.Content />
</article>
