export const RATIO_SEPARATOR = '/';

export function generateImageUrls(
	name: string,
	breakpoints: { s: number; m?: number; l?: number },
	ratio: string,
	extension: string,
): { s: string; m: string; l: string } {
	const { s: sWidth, m: mWidth, l: lWidth } = breakpoints;
	const sHeight = calculateImageHeight(sWidth, ratio);
	const mHeight = mWidth && calculateImageHeight(mWidth, ratio);
	const lHeight = lWidth && calculateImageHeight(lWidth, ratio);

	return {
		s: `${name}.${sWidth}x${sHeight}.${extension}`,
		m: `${name}.${mWidth}x${mHeight}.${extension}`,
		l: `${name}.${lWidth}x${lHeight}.${extension}`,
	};
}

export function calculateImageHeight(width: number, ratio: string): number {
	return Math.ceil(width / evaluateRatio(ratio));
}

export function evaluateRatio(ratio: string): number {
	const [ratioWidth, ratioHeight] = ratio.split(RATIO_SEPARATOR);

	return Number(ratioWidth) / Number(ratioHeight);
}
