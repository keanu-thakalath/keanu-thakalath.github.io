<script>
	let { data } = $props();
</script>

<div class="page">
	<h1>Blog</h1>

	<ul class="blog-list">
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<p class="date">{post.meta.date}</p>
			</li>
		{/each}
	</ul>
</div>
