import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts, sortPostsByDate } from '$lib/posts';

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = sortPostsByDate(allPosts);

	return json(sortedPosts);
};
