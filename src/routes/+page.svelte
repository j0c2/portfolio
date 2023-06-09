<script>
	import '../app.css';
	import smoothScroll from '../smoothScroll.js';
	import About from './about.svelte';
	import Experience from './experience.svelte';
	import Projects from './projects.svelte';
	import Contact from './contact.svelte';
</script>

<main>
	<div class="min-h-screen bg-grey-800 text-white">
		<div class="container mx-auto px-4">
			<header class="py-10">
				<h1 class="text-6xl font-bold">Joshua Chung</h1>
				<h2 class="text-2xl pt-2">Sr Site Reliability Engineer</h2>
				<h2 class="text-xl pt-2">I slam code all day</h2>

				<nav>
					<div class="container mx-auto px4">
						<a href="#about" class="scroll-link" use:smoothScroll>About</a>
						<a href="#experience" class="scroll-link" use:smoothScroll>Experience</a>
						<a href="#contact" class="scroll-link" use:smoothScroll>Contact</a>
					</div>
				</nav>
			</header>

			<main class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<section>
					<h2 class="text-2xl font-bold">About Me</h2>
					<p>I'm a coder.</p>
				</section>

				<section>
					<h2 class="text-2xl font-bold">Projects</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<!-- Individual projects -->
						<div>
							<h3 class="text-xl font-bold">Project 1</h3>
							<p>...</p>
						</div>
						<div>
							<h3 class="text-xl font-bold">Project 2</h3>
							<p>...</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	</div>
	<nav>
		<a href="#about" class="scroll-link" use:smoothScroll>About</a>
		<a href="#experience" class="scroll-link" use:smoothScroll>Experience</a>
		<a href="#contact" class="scroll-link" use:smoothScroll>Contact</a>
	</nav>

	<section id="about"><About /></section>
	<section id="experience"><Experience /></section>
	<section id="experience"><Projects /></section>
	<section id="contact"><Contact /></section>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	} /* You can define your CSS styles here */
</style>
