import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FC, HTMLAttributes } from 'react';
import { ReactComponent as ShoppingBagIcon } from '@vn-ecommerce/ui-kit/icons/shopping-bag.svg';
import styles from './RightMenu.module.scss';

const cx = classNames.bind(styles);

type Props = HTMLAttributes<HTMLDivElement>;

export const RightMenu: FC<Props> = (props: Props) => {
	const { className, ...rest } = props;
	const rightMenuClasses = cx('right-menu', className);
	const rightMenuLinkClasses = cx('right-menu__link');

	return (
		<div className={rightMenuClasses}>
			<Link to="/cart" className={rightMenuLinkClasses}>
				<ShoppingBagIcon />
			</Link>
		</div>
	);
};
