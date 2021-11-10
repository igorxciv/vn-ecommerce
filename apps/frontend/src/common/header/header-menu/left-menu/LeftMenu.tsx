import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './LeftMenu.module.scss';
import { Hamburger } from './hamburger';

const cx = classNames.bind(styles);

export const LeftMenu: FC = () => {
	const leftMenuClasses = cx('left-menu');
	const hamburgerClasses = cx('left-menu__hamburger');

	return (
		<div className={leftMenuClasses}>
			<div className={hamburgerClasses}>
				<Hamburger />
			</div>
		</div>
	);
};
