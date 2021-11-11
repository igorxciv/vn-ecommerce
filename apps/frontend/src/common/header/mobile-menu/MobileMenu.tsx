import { FC } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { MenuItems } from './menu-items';
import { MenuHead } from './menu-head';
import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const MobileMenu: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const mobileMenuClasses = cx('mobile-menu');
	const overlayClasses = cx('mobile-menu__overlay');
	const layerClasses = cx('mobile-menu__layer');
	const separatorClasses = cx('mobile-menu__separator');

	return createPortal(
		<div className={mobileMenuClasses}>
			<div role="presentation" className={overlayClasses} onClick={onClose} />
			<div className={layerClasses}>
				<MenuHead />
				<MenuItems />
				<hr className={separatorClasses} />
			</div>
		</div>,
		document.body,
	);
};
