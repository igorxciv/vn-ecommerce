import { FC, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import styles from './MobileMenu.module.scss';
import { Hamburger } from './hamburger';
import { Sidebar } from './sidebar';

const cx = classNames.bind(styles);

export const MobileMenu: FC = () => {
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const handleSidebarClose = () => {
		setSidebarVisible(false);
	};

	const handleSidebarOpen = () => {
		setSidebarVisible(true);
	};

	const sidebarMenu = createPortal(
		<Transition
			nodeRef={mobileMenuRef}
			in={sidebarVisible}
			mountOnEnter
			unmountOnExit
			timeout={{ exit: TransitionDuration.MobileMenuOpen }}>
			{(state) => {
				const sidebarClasses = cx('mobile-menu__sidebar', `mobile-menu__sidebar--${state}`);

				return <Sidebar ref={mobileMenuRef} closing={state === 'exiting'} onClose={handleSidebarClose} className={sidebarClasses} />;
			}}
		</Transition>,
		document.body,
	);

	return (
		<>
			<Hamburger onClick={handleSidebarOpen} />
			{sidebarMenu}
		</>
	);
};
