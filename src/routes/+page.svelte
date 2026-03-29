<script>
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible = $state(false);
	onMount(() => visible = true);
</script>

<svelte:head>
	<title>Keanu Thakalath</title>
</svelte:head>

<div class="page home">
	{#if visible}
		<section class="hero" in:fly={{ y: 24, duration: 700, easing: cubicOut }}>
			<h1 class="greeting">hi, i'm <span class="name">keanu</span></h1>
			<p class="tagline">i like building things for the web, tinkering with AI, and learning Japanese.</p>
		</section>

		<section class="section" in:fly={{ y: 20, duration: 600, delay: 150, easing: cubicOut }}>
			<h2>interests</h2>
			<div class="tags">
				<span class="tag">rust</span>
				<span class="tag">machine learning</span>
				<span class="tag">Japanese language</span>
				<span class="tag">reading</span>
				<span class="tag">psychology</span>
				<span class="tag">veganism</span>
				<span class="tag">cooking</span>
				<span class="tag">web development</span>
			</div>
		</section>

		<section class="section" in:fly={{ y: 20, duration: 600, delay: 300, easing: cubicOut }}>
			<h2>currently building</h2>
			<div class="project-grid">
				<a class="project-card" href="https://yomisensei.net" target="_blank" rel="noreferrer">
					<h3>Yomi Sensei</h3>
					<p>An AI-powered Japanese reading companion for immersion learners.</p>
					<span class="tech">Rust &middot; KurrentDB</span>
				</a>
				<a class="project-card" href="https://github.com/hcp-uw/mosaic" target="_blank" rel="noreferrer">
					<h3>Mosaic</h3>
					<p>A decentralized peer-to-peer file storage network.</p>
					<span class="tech">Go</span>
				</a>
				<div class="project-card coming-soon">
					<h3>en</h3>
					<p>An AI-powered personal relationship management app for macOS.</p>
					<span class="tech">Rust</span>
				</div>
				<a class="project-card" href="/voice-training">
					<h3>Voice Training</h3>
					<p>A structured course for voice feminization.</p>
					<span class="tech">SvelteKit</span>
				</a>
			</div>
		</section>

		<section class="section" in:fly={{ y: 20, duration: 600, delay: 450, easing: cubicOut }}>
			<h2>books</h2>
			<ul class="fav-list">
				<li>
					<span class="fav-title">The Myth of Sisyphus <span class="fav-author">by Albert Camus</span></span>
				</li>
				<li>
					<span class="fav-title">The Mayor of Casterbridge <span class="fav-author">by Thomas Hardy</span></span>
				</li>
				<li>
					<span class="fav-title">涼宮ハルヒの憂鬱 <span class="fav-author">谷川流</span></span>
					<span class="fav-note">The Melancholy of Haruhi Suzumiya by Tanigawa Nagaru</span>
				</li>
			</ul>
			<h3 class="currently-heading">currently reading</h3>
			<p class="currently-item"><strong>告白</strong> <span class="fav-author">湊かなえ</span></p>
			<p class="fav-note">Confessions by Minato Kanae</p>
		</section>

		<section class="section" in:fly={{ y: 20, duration: 600, delay: 600, easing: cubicOut }}>
			<h2>anime</h2>
			<ul class="fav-list">
				<li>
					<span class="fav-title">魔法少女まどか☆マギカ</span>
					<span class="fav-note">Puella Magi Madoka Magica</span>
				</li>
				<li>
					<span class="fav-title">雲のむこう、約束の場所</span>
					<span class="fav-note">The Place Promised in Our Early Days</span>
				</li>
				<li>
					<span class="fav-title">ヱヴァンゲリヲン新劇場版</span>
					<span class="fav-note">Evangelion: Rebuild</span>
				</li>
			</ul>
			<h3 class="currently-heading">currently watching</h3>
			<p class="currently-item"><strong>クズの本懐</strong></p>
			<p class="fav-note">Scum's Wish</p>
		</section>

		<section class="section" in:fly={{ y: 20, duration: 600, delay: 750, easing: cubicOut }}>
			<h2>resume</h2>
			<div class="resume-card">
				<div class="resume-row">
					<h3>education</h3>
					<p>BS Computer Science, University of Washington &mdash; Winter 2026</p>
				</div>
				<div class="resume-row">
					<h3>experience</h3>
					<p>Amazon Lightsail &mdash; 2x SDE Intern</p>
					<p>Amazon Lightsail &mdash; SDE, starting Sep 2026</p>
					<p><a href="https://github.com/yomidevs/yomitan" target="_blank" rel="noreferrer">Yomitan</a> contributor</p>
				</div>
				<div class="resume-row">
					<h3>skills</h3>
					<div class="tags">
						<span class="tag">Rust</span>
						<span class="tag">TypeScript</span>
						<span class="tag">Python</span>
						<span class="tag">Go</span>
						<span class="tag">C++</span>
						<span class="tag">SvelteKit</span>
						<span class="tag">AI / ML</span>
					</div>
				</div>
				<a class="resume-link" href="/resume.pdf">view full resume &rarr;</a>
			</div>
		</section>
	{/if}
</div>

<style>
	.home {
		padding-bottom: 2rem;
	}

	/* --- Hero --- */
	.hero {
		text-align: center;
		padding: 3rem 0 0.5rem;
	}

	.greeting {
		font-size: 2.4rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.02em;
	}

	.name {
		color: var(--color-primary);
	}

	.tagline {
		font-size: 1.08rem;
		color: var(--color-text-muted);
		margin-top: 0.5rem;
	}

	/* --- Sections --- */
	.section {
		margin-top: 2.2rem;
	}

	.section h2 {
		font-size: 1.1rem;
		margin: 0;
		text-transform: lowercase;
		letter-spacing: 0.03em;
		color: var(--color-text-muted);
		font-weight: 600;
	}

	/* --- Tags --- */
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 0.55rem;
	}

	.tag {
		background: var(--color-surface-alt);
		border: 1px solid var(--color-border-light);
		border-radius: 20px;
		padding: 0.25rem 0.7rem;
		font-size: 0.87rem;
		color: var(--color-text);
		transition: border-color 0.2s;
	}

	.tag:hover {
		border-color: var(--color-primary);
	}

	/* --- Project grid --- */
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 0.7rem;
		margin-top: 0.6rem;
	}

	.project-card {
		display: block;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 0.9rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.25s, transform 0.25s;
	}

	.project-card:hover {
		border-color: var(--color-primary);
		transform: translateY(-2px);
		color: inherit;
	}

	.project-card.coming-soon {
		opacity: 0.6;
		border-style: dashed;
		cursor: default;
	}

	.project-card.coming-soon:hover {
		transform: none;
		border-color: var(--color-border);
	}

	.project-card h3 {
		margin: 0;
		font-size: 1rem;
		color: var(--color-text-strong);
	}

	.project-card p {
		margin: 0.25rem 0 0;
		font-size: 0.9rem;
		color: var(--color-text-muted);
		line-height: 1.45;
	}

	.tech {
		display: inline-block;
		margin-top: 0.45rem;
		font-size: 0.8rem;
		color: var(--color-primary);
		font-weight: 600;
	}

	/* --- Favorite lists --- */
	.fav-list {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0 0;
	}

	.fav-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-border-light);
	}

	.fav-list li:last-child {
		border-bottom: none;
	}

	.fav-title {
		font-weight: 600;
		color: var(--color-text-strong);
		display: block;
	}

	.fav-author {
		font-weight: 400;
		color: var(--color-text-muted);
		font-size: 0.9rem;
	}

	.fav-note {
		font-size: 0.88rem;
		color: var(--color-text-muted);
		display: block;
		margin-top: 0.1rem;
	}

	.currently-heading {
		font-size: 0.92rem;
		margin: 1.2rem 0 0;
		text-transform: lowercase;
		letter-spacing: 0.03em;
		color: var(--color-text-muted);
		font-weight: 600;
	}

	.currently-item {
		margin: 0.3rem 0 0;
	}

	.currently-item strong {
		color: var(--color-text-strong);
	}

	.currently-item .fav-note {
		display: inline;
	}

	/* --- Resume --- */
	.resume-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 1rem;
		margin-top: 0.6rem;
	}

	.resume-row {
		margin-bottom: 0.8rem;
	}

	.resume-row h3 {
		font-size: 0.92rem;
		margin: 0 0 0.25rem;
		color: var(--color-text-muted);
		font-weight: 600;
		text-transform: lowercase;
	}

	.resume-row p {
		margin: 0;
		font-size: 0.94rem;
	}

	.resume-link {
		display: inline-block;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--color-primary);
		border-bottom: 1px solid var(--color-border);
		transition: border-color 0.2s;
	}

	.resume-link:hover {
		border-bottom-color: var(--color-primary);
	}
</style>
