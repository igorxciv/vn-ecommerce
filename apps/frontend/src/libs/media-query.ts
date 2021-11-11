export function createMediaQuery({ minWidth = 0, maxWidth }: { minWidth: number; maxWidth: number }) {
	let mediaQuery = `(min-width: ${minWidth}px)`;

	if (maxWidth) {
		mediaQuery += ` and (max-width: ${maxWidth}px)`;
	}

	return mediaQuery;
}

export function matchScreenWidth({ minWidth = 0, maxWidth }: { minWidth?: number; maxWidth: number }) {
	const mediaQuery = createMediaQuery({ minWidth, maxWidth });

	return window.matchMedia(mediaQuery).matches;
}
