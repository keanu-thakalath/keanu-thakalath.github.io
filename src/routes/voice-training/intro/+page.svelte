<script>
	import { goto } from '$app/navigation';
	import { getProgressState } from '$lib/voice-training/progress-state.svelte.js';
	import { vtBase } from '$lib/voice-training/paths.js';

	const progress = getProgressState();

	function beginCourse() {
		progress.startCourse();
		goto(vtBase);
	}
</script>

<section class="intro-page">
	<div class="intro-hero">
		<h1>Ruten</h1>
		<p class="intro-subtitle">A structured, self-paced voice feminization course based on
			<a href="https://old.reddit.com/r/transvoice/comments/d3cqqm/ls_voice_training_guide_level_4_for_mtf/" target="_blank" rel="noreferrer">L's Voice Training Guide</a>.</p>
	</div>

	<div class="intro-section">
		<h2>What is this?</h2>
		<p>Ruten is a free, interactive voice training course that takes the concepts from L's Voice Training Guide and organizes them into a structured weekly curriculum with built-in practice tracking, timed exercises, and audio recording.</p>
		<p>The original guide lays out a progression through four difficulty levels covering eight core vocal elements. This course turns that progression into concrete weekly lessons with daily practice routines you can follow at your own pace.</p>
	</div>

	<div class="intro-section">
		<h2>What does it cover?</h2>
		<p>The course spans 10 weeks across four levels:</p>
		<div class="level-grid">
			<div class="level-card">
				<h3>Level 1 — Foundations</h3>
				<p>Reference voice selection, baseline recording, vocal tract length, larynx control, pitch fundamentals, and resonance layering.</p>
			</div>
			<div class="level-card">
				<h3>Level 2 — Intermediate</h3>
				<p>Open quotient and breathiness control, intonation patterns, and expressive speech melody.</p>
			</div>
			<div class="level-card">
				<h3>Level 3 — Advanced</h3>
				<p>Articulation and vowel/consonant brightness, vocal twang for clarity and projection, throat closure and nasality control.</p>
			</div>
			<div class="level-card">
				<h3>Level 4 — Mastery</h3>
				<p>Mantra phrase exploration, structured feedback and polishing, performance preparation, and real-world carryover.</p>
			</div>
		</div>
	</div>

	<div class="intro-section">
		<h2>How does it work?</h2>
		<ul>
			<li>Each week has lesson writeups explaining the concepts and technique.</li>
			<li>Daily practice sessions with timed exercises, recording prompts, and reflection tasks.</li>
			<li>Your progress is tracked locally in your browser — nothing is sent to a server.</li>
			<li>Work at your own pace. The weekly structure is a guide, not a deadline.</li>
		</ul>
	</div>

	<div class="intro-cta">
		<button onclick={beginCourse}>Begin Course</button>
	</div>
</section>
