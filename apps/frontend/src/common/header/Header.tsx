import { Logo } from '@vn-ecommerce/ui-kit/atoms/logo';
import classNames from 'classnames/bind';
import { Hamburger } from './hamburger';
import styles from './Header.module.scss';
import { RightMenu } from './right-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const headerClasses = cx('header');

	return (
		<header className={headerClasses}>
			<Hamburger />
			<Logo />
			<RightMenu />
		</header>
	);
};
