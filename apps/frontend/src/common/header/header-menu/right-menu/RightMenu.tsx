import { FC } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingBagIcon } from '@vn-ecommerce/ui-kit/icons/shopping-bag.svg';
import { ReactComponent as UserIcon } from '@vn-ecommerce/ui-kit/icons/user.svg';
import styles from './RightMenu.module.scss';

const cx = classNames.bind(styles);

export const RightMenu: FC = () => {
	const rightMenuClasses = cx('right-menu');
	const linkClasses = cx('right-menu__link');
	const userLinkClasses = cx(linkClasses, 'right-menu__user');

	return (
		<div className={rightMenuClasses}>
			<Link to="/account" className={userLinkClasses}>
				<UserIcon />
			</Link>
			<Link to="/cart" className={linkClasses}>
				<ShoppingBagIcon />
			</Link>
		</div>
	);
};
