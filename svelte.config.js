import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
