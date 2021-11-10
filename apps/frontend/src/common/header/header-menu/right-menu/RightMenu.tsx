import { FC } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ShoppingBagIcon } from '@vn-ecommerce/ui-kit/icons/shopping-bag.svg';
import { Link } from 'react-router-dom';
import styles from './RightMenu.module.scss';

const cx = classNames.bind(styles);

export const RightMenu: FC = () => {
	const rightMenuClasses = cx('right-menu');
	const rightMenuLinkClasses = cx('right-menu__link');

	return (
		<div className={rightMenuClasses}>
			<Link to="/cart" className={rightMenuLinkClasses}>
				<ShoppingBagIcon />
			</Link>
		</div>
	);
};
