import classNames from 'classnames/bind';
import { Logo } from '@vn-ecommerce/ui-kit/atoms/logo';
import styles from './Header.module.scss';
import { Hamburger } from './hamburger';
import { RightMenu } from './right-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const headerClasses = cx('header');
	const hamburgerClasses = cx('header__hamburger');
	const rightMenuClasses = cx('header__right-menu');

	return (
		<header className={headerClasses}>
			<Hamburger className={hamburgerClasses} />
			<Logo />
			<RightMenu className={rightMenuClasses} />
		</header>
	);
};
