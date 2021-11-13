import classNames from 'classnames/bind';
import { useScrollDirectionChange, useTopState } from '@frontend/libs/scroll';
import styles from './Header.module.scss';
import { HeaderMenu } from './header-menu';
import { NavigationMenu } from './navigation-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const direction = useScrollDirectionChange();
	const isTop = useTopState();
	const compact = direction === 'down';

	const headerClasses = cx('header', { 'header--compact': compact, 'header--top': isTop });
	const menuClasses = cx('header__menu', { 'header__menu--compact': compact });
	const navigationClasses = cx('header__navigation');

	return (
		<header className={headerClasses}>
			<div className={menuClasses}>
				<HeaderMenu />
			</div>
			<div className={navigationClasses}>
				<NavigationMenu compact={compact} />
			</div>
		</header>
	);
};
