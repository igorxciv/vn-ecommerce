import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '@vn-ecommerce/ui-kit/icons/logo.svg';
import { ReactComponent as CartIcon } from '@vn-ecommerce/ui-kit/icons/shopping-bag.svg';
import { useScrollDirectionChange, useTopState } from '@frontend/libs/scroll';
import styles from './Header.module.scss';
import { MobileMenu } from './mobile-menu';
import { HeaderMenu } from './header-menu';
import { NavigationMenu } from './navigation-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const direction = useScrollDirectionChange();
	const isTop = useTopState();
	const isCompact = direction === 'down';

	const headerClasses = cx('header', { 'header--compact': isCompact, 'header--top': isTop });
	const menuClasses = cx('header__menu', { 'header__menu--compact': isCompact });
	const navigationClasses = cx('header__navigation');
	const navigationInnerClasses = cx('header__navigation-inner');
	const logoClasses = cx('header__logo');
	const cartClasses = cx('header__cart');

	return (
		<header className={headerClasses}>
			<div className={menuClasses}>
				<HeaderMenu />
			</div>
			<div className={navigationClasses}>
				<div className={navigationInnerClasses}>
					<Link to="/" className={logoClasses}>
						<LogoIcon />
					</Link>
					<NavigationMenu />
					<Link to="/cart" className={cartClasses}>
						<CartIcon />
					</Link>
				</div>
			</div>
		</header>
	);
};
