import { validatePost } from '$lib/markdown';
import { redirect } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import { getAllPostSlugs } from '$lib/posts';

export const prerender = true;

// Tell SvelteKit which slugs to prerender at build time
export const entries: EntryGenerator = async () => {
	const slugs = await getAllPostSlugs();
	return slugs.map((slug) => ({ slug }));
};

export async function load({ params }) {
	const importedModule = await import(`../${params.slug}.md`);

	// Validate instead of type assertion
	const post = validatePost(importedModule, `Blog post: ${params.slug}`);

	if (post.metadata.link) {
		redirect(301, post.metadata.link);
	}

	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}
