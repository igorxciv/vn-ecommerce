import { FC } from 'react';
import classNames from 'classnames/bind';
import { Logo } from '@vn-ecommerce/ui-kit/atoms/logo';
import { LeftMenu } from './left-menu';
import { RightMenu } from './right-menu';
import styles from './HeaderMenu.module.scss';

const cx = classNames.bind(styles);

export const HeaderMenu: FC = () => {
	const headerMenuClasses = cx('header-menu');

	return (
		<div className={headerMenuClasses}>
			<LeftMenu />
			<Logo />
			<RightMenu />
		</div>
	);
};
