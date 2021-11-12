import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { ReactComponent as LogoIcon } from '@vn-ecommerce/ui-kit/icons/logo.svg';
import styles from './SidebarHead.module.scss';

const cx = classNames.bind(styles);

export const SidebarHead: FC = () => {
	const menuHeadClasses = cx('sidebar-head');
	const linkClasses = cx('sidebar-head__link');

	return (
		<div className={menuHeadClasses}>
			<Link to="/" className={linkClasses}>
				<LogoIcon />
			</Link>
		</div>
	);
};
