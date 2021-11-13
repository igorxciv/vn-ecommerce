import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { useScrollDirectionChange, useTopState } from '@frontend/libs/scroll';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import styles from './Header.module.scss';
import { HeaderMenu } from './header-menu';
import { NavigationMenu } from './navigation-menu';

const cx = classNames.bind(styles);

export const Header = () => {
	const direction = useScrollDirectionChange();
	const isTop = useTopState();
	const compact = direction === 'down';

	const headerClasses = cx('header', { 'header--top': isTop, 'header--compact': compact });
	const menuClasses = cx('header__menu');
	const navigationClasses = cx('header__navigation');

	return (
		<Transition in={compact} timeout={TransitionDuration.HeaderCollapse}>
			{(state) => (
				<header className={cx(headerClasses)}>
					<div className={cx(menuClasses, { 'header__menu--compact': state === 'entered' })}>
						<HeaderMenu />
					</div>
					<div className={navigationClasses}>
						<NavigationMenu compact={compact} />
					</div>
				</header>
			)}
		</Transition>
	);
};
