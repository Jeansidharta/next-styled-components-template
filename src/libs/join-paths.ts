/**
 * Given any number of paths larger than zero, properly join them, making sure
 * only one slash character exists between them.
 */
export function joinPaths(...paths: string[]) {
	if (paths.length === 0) throw new Error('No paths received to join. This is undefined behavior');
	if (paths.length === 1) return paths[0];

	const parsedPaths = paths
		.map(path => path.trim().replace(/(:?^[/\\])|(:?[/\\]$)/g, ''))
		.join('/');

	if (paths[0].startsWith('/') || paths[0].startsWith('\\')) {
		return '/' + parsedPaths;
	}

	return parsedPaths;
}
