export function linkify(text: string): string {
	let s = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	s = s.replace(
		/((?:this|that|the)\s[\w\s,'-]{1,80}?[\w'-]+)\s*\((https?:\/\/[^\s)]+)\)/gi,
		'<a href="$2" target="_blank" rel="noreferrer">$1</a>'
	);
	s = s.replace(
		/([A-Z][\w'-]*(?:\s+[A-Z]?[\w'-]+){0,4})\s*\((https?:\/\/[^\s)]+)\)/g,
		'<a href="$2" target="_blank" rel="noreferrer">$1</a>'
	);
	s = s.replace(
		/\((https?:\/\/([^\s/)]+)[^\s)]*)\)/g,
		'(<a href="$1" target="_blank" rel="noreferrer">$2</a>)'
	);
	return s;
}
