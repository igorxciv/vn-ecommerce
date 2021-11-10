import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { HeaderMenu } from './header-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const headerClasses = cx('header');

	return (
		<header className={headerClasses}>
			<HeaderMenu />
		</header>
	);
};
