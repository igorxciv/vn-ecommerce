import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithoutRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import { SideBarItems } from './sidebar-items';
import { SidebarHead } from './sidebar-head';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
	closing?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Sidebar = forwardRef((props: PropsWithoutRef<Props>, ref: ForwardedRef<HTMLDivElement>) => {
	const { onClose, closing = false, className } = props;

	const sidebarClasses = cx('sidebar');
	const overlayClasses = cx('sidebar__overlay', { 'sidebar__overlay--closing': closing });
	const layerClasses = cx('sidebar__layer', className);
	const separatorClasses = cx('sidebar__separator');

	const history = useHistory();

	history.listen(() => {
		onClose();
	});

	return (
		<div ref={ref} className={sidebarClasses}>
			<div role="presentation" className={overlayClasses} onClick={onClose} />
			<div className={layerClasses}>
				<SidebarHead />
				<SideBarItems />
				<hr className={separatorClasses} />
			</div>
		</div>
	);
});

Sidebar.displayName = 'Sidebar';
