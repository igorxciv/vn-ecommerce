import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { ReactComponent as LogoIcon } from '@vn-ecommerce/ui-kit/icons/logo.svg';
import styles from './MenuHead.module.scss';

const cx = classNames.bind(styles);

export const MenuHead: FC = () => {
	const menuHeadClasses = cx('menu-head');
	const linkClasses = cx('menu-head__link');

	return (
		<div className={menuHeadClasses}>
			<Link to="/" className={linkClasses}>
				<LogoIcon />
			</Link>
		</div>
	);
};
