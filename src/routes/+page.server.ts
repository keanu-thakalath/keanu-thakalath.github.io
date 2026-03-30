import { fetchMarkdownPosts, sortPostsByDate } from '$lib/posts';

export const load = async () => {
	const allPosts = await fetchMarkdownPosts();
	const posts = sortPostsByDate(allPosts).slice(0, 3);

	return {
		recentPosts: posts
	};
};
