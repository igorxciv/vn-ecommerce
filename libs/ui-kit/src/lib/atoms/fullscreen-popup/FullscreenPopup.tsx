import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';
import styles from './FullscreenPopup.module.scss';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

const cx = classNames.bind(styles);

type Props = {
	title?: string;
	onClose: () => void;
};

export const FullscreenPopup: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { title, onClose, children } = props;
	const popupClasses = cx('popup');
	const overlayClasses = cx('popup__overlay');
	const bodyClasses = cx('popup__body');
	const headClasses = cx('popup__head');
	const titleClasses = cx('popup__title');
	const closeClasses = cx('popup__close');
	const closeIconClasses = cx('popup__close-icon');
	const contentClasses = cx('popup__content');

	return createPortal(
		<div className={popupClasses}>
			<div role="presentation" className={overlayClasses} onClick={onClose} />
			<div className={bodyClasses}>
				<div className={headClasses}>
					<h1 className={titleClasses}>{title}</h1>
					<button className={closeClasses} onClick={onClose}>
						<CrossIcon className={closeIconClasses} />
					</button>
				</div>
				<div className={contentClasses}>{children}</div>
			</div>
		</div>,
		document.body,
	);
};
