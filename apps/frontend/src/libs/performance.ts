export function debounce(wait: number, callback: () => void): () => void {
	let timer: number;

	return () => {
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			callback();
		}, wait);
	};
}
