import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithoutRef } from 'react';
import classNames from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import { MenuItems } from './menu-items';
import { MenuHead } from './menu-head';
import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const MobileMenu = forwardRef((props: PropsWithoutRef<Props>, ref: ForwardedRef<HTMLDivElement>) => {
	const { onClose, className } = props;

	const mobileMenuClasses = cx('mobile-menu');
	const overlayClasses = cx('mobile-menu__overlay');
	const layerClasses = cx('mobile-menu__layer', className);
	const separatorClasses = cx('mobile-menu__separator');

	const history = useHistory();

	history.listen(() => {
		onClose();
	});

	return (
		<div ref={ref} className={mobileMenuClasses}>
			<div role="presentation" className={overlayClasses} onClick={onClose} />
			<div className={layerClasses}>
				<MenuHead />
				<MenuItems />
				<hr className={separatorClasses} />
			</div>
		</div>
	);
});

MobileMenu.displayName = 'MobileMenu';
