import { FC, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { MobileMenu } from '@frontend/common/header/mobile-menu';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import styles from './LeftMenu.module.scss';
import { Hamburger } from './hamburger';

const cx = classNames.bind(styles);

export const LeftMenu: FC = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const leftMenuClasses = cx('left-menu');
	const hamburgerClasses = cx('left-menu__hamburger');

	const handleMobileMenuClose = () => {
		setMobileMenuVisible(false);
	};

	const handleMobileMenuOpen = () => {
		setMobileMenuVisible(true);
	};

	const mobileMenu = createPortal(
		<Transition
			nodeRef={mobileMenuRef}
			in={mobileMenuVisible}
			mountOnEnter
			unmountOnExit
			timeout={{ exit: TransitionDuration.MobileMenuOpen }}>
			{(state) => {
				const mobileMenuClasses = cx('left-menu__mobile-menu', `left-menu__mobile-menu--${state}`);

				return <MobileMenu ref={mobileMenuRef} onClose={handleMobileMenuClose} className={mobileMenuClasses} />;
			}}
		</Transition>,
		document.body,
	);

	return (
		<div className={leftMenuClasses}>
			<div className={hamburgerClasses}>
				<Hamburger onClick={handleMobileMenuOpen} />
			</div>
			{mobileMenu}
		</div>
	);
};
