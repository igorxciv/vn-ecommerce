import { FC, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

export const Video: FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleCompleteLoading = async () => {
		if (videoRef.current) {
			await videoRef.current.play();
		}
	};

	useEffect(() => {
		if (Hls.isSupported()) {
			if (!videoRef.current) {
				return;
			}
			const hls = new Hls({ autoStartLoad: false, maxBufferLength: 2 });

			hls.loadSource('http://localhost:3000/videos/venera/venera.m3u8');
			hls.attachMedia(videoRef.current);
			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				hls.startLoad(0);
			});
		}
	}, []);

	const videoClasses = cx('video');

	// eslint-disable-next-line jsx-a11y/media-has-caption
	return <video ref={videoRef} muted loop onCanPlayThrough={handleCompleteLoading} className={videoClasses} />;
};
