import type { PostMetadata } from '$lib/markdown';
import { validatePost } from '$lib/markdown';

export interface PostView {
	meta: PostMetadata;
	path: string;
}

export async function fetchMarkdownPosts(): Promise<PostView[]> {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const resolvedModule = await resolver();

			// Validate instead of type assertion
			const post = validatePost(resolvedModule, `Post file: ${path}`);

			const postPath = path.slice(11, -3);

			return {
				meta: post.metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}

export function sortPostsByDate(posts: PostView[]): PostView[] {
	return posts.sort((a, b) => {
		return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
	});
}

export async function getAllPostSlugs(): Promise<string[]> {
	const posts = await fetchMarkdownPosts();
	return posts.map((post) => post.path.split('/').pop() || '');
}
