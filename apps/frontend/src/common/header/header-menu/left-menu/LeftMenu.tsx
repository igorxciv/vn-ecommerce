import { FC, useState } from 'react';
import classNames from 'classnames/bind';
import { MobileMenu } from '@frontend/common/header/mobile-menu';
import styles from './LeftMenu.module.scss';
import { Hamburger } from './hamburger';

const cx = classNames.bind(styles);

export const LeftMenu: FC = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
	const leftMenuClasses = cx('left-menu');
	const hamburgerClasses = cx('left-menu__hamburger');

	const handleMobileMenuClose = () => {
		setMobileMenuVisible(false);
	};

	const handleMobileMenuOpen = () => {
		setMobileMenuVisible(true);
	};

	const mobileMenu = mobileMenuVisible && <MobileMenu onClose={handleMobileMenuClose} />;

	return (
		<div className={leftMenuClasses}>
			<div className={hamburgerClasses}>
				<Hamburger onClick={handleMobileMenuOpen} />
			</div>
			{mobileMenu}
		</div>
	);
};
