<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Keanu Thakalath</title>
</svelte:head>

<div class="page">
	<h1>Blog</h1>

	<ul class="blog-list">
		{#each data.posts as post (post.path)}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<p class="date">{post.meta.date}</p>
				{#if post.meta.description}
					<p class="description">{post.meta.description}</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
