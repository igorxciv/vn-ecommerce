import { useEffect, useState } from 'react';
import { debounce } from './performance';

export type ScrollDirection = 'up' | 'down';

export function useTopState(): boolean {
	const [isTop, setTop] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const { scrollY } = window;

			if (scrollY <= 0) {
				setTop(true);
			} else {
				setTop(false);
			}
		};

		onScroll();

		const debouncedScroll = debounce(150, onScroll);

		window.addEventListener('scroll', debouncedScroll);

		return () => {
			window.removeEventListener('scroll', debouncedScroll);
		};
	}, []);

	return isTop;
}

export function useScrollDirectionChange(threshold = 10): ScrollDirection {
	const [direction, setDirection] = useState<ScrollDirection>('up');

	useEffect(() => {
		let prevScrollY = window.scrollY;
		let ticking = false;

		const updateScrollDirection = () => {
			const { scrollY } = window;

			if (Math.abs(scrollY - prevScrollY) < threshold) {
				ticking = false;

				return;
			}

			setDirection(scrollY > prevScrollY ? 'down' : 'up');
			prevScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDirection);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [direction, threshold]);

	return direction;
}
