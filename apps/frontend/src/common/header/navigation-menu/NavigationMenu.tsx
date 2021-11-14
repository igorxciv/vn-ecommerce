import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { ReactComponent as LogoIcon } from '@vn-ecommerce/ui-kit/icons/logo.svg';
import { ReactComponent as CartIcon } from '@vn-ecommerce/ui-kit/icons/shopping-bag.svg';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import { NavigationItems } from './navigation-items';
import styles from './NavigationMenu.module.scss';

const cx = classNames.bind(styles);

type Props = {
	compact?: boolean;
};

export const NavigationMenu: FC<Props> = (props: Props) => {
	const { compact = false } = props;

	const logoRef = useRef<HTMLAnchorElement>(null);
	const cartRef = useRef<HTMLAnchorElement>(null);

	const navigationClasses = cx('navigation-menu', {
		'navigation-menu--compact': compact,
	});
	const logoClasses = cx('navigation-menu__logo');
	const cartClasses = cx('navigation-menu__cart');

	const logo = (
		<Transition nodeRef={logoRef} in={compact} timeout={{ exit: TransitionDuration.NavigationMenuSideItems }} mountOnEnter unmountOnExit>
			{(state) => (
				<Link ref={logoRef} to="/" className={cx(logoClasses, `navigation-menu__logo--${state}`)}>
					<LogoIcon />
				</Link>
			)}
		</Transition>
	);

	const cart = (
		<Transition nodeRef={cartRef} in={compact} timeout={{ exit: TransitionDuration.NavigationMenuSideItems }} mountOnEnter unmountOnExit>
			{(state) => (
				<Link ref={cartRef} to="/cart" className={cx(cartClasses, `navigation-menu__cart--${state}`)}>
					<CartIcon />
				</Link>
			)}
		</Transition>
	);

	return (
		<div className={navigationClasses}>
			{logo}
			<nav>
				<NavigationItems />
			</nav>
			{cart}
		</div>
	);
};
