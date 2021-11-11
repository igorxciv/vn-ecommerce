import { useEffect, useState } from 'react';
import { matchScreenWidth } from './media-query';

export function useScreenSizeMatch({ minWidth = 0, maxWidth }: { minWidth?: number; maxWidth: number }) {
	const [isMatch, setMatch] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const match = matchScreenWidth({ minWidth, maxWidth });

			setMatch(match);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [maxWidth, minWidth]);

	return isMatch;
}
