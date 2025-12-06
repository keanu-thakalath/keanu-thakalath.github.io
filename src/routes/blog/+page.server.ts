import { fetchMarkdownPosts, sortPostsByDate } from '$lib/posts';

export const prerender = true;

export const load = async () => {
	const allPosts = await fetchMarkdownPosts();
	const posts = sortPostsByDate(allPosts);

	return {
		posts
	};
};
