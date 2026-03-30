import { fetchMarkdownPosts, sortPostsByDate } from '$lib/posts';

const SITE_URL = 'https://keanuthakalath.com';

export const prerender = true;

export async function GET() {
	const posts = sortPostsByDate(await fetchMarkdownPosts());

	const items = posts
		.map((post) => {
			const url = post.meta.link ?? `${SITE_URL}${post.path}`;
			return `		<item>
			<title>${escapeXml(post.meta.title)}</title>
			<link>${url}</link>
			<guid>${url}</guid>
			<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>${post.meta.description ? `\n\t\t\t<description>${escapeXml(post.meta.description)}</description>` : ''}
		</item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Keanu Thakalath</title>
		<link>${SITE_URL}</link>
		<description>Keanu Thakalath's blog</description>
		<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
