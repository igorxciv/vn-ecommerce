import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { selectNavigationItems } from '@frontend/store/selectors/navigation';
import styles from './SideBarItems.module.scss';

const cx = classNames.bind(styles);

const INITIAL_TRANSITION_DELAY = 0.05;
const MENU_ITEM_TRANSITION_DELAY = 0.02;

export const SideBarItems: FC = () => {
	const { t } = useTranslation('navigation');
	const navItems = useSelector(selectNavigationItems);

	const listClasses = cx('sidebar-items__list');
	const itemClasses = cx('sidebar-items__item');
	const linkClasses = cx('sidebar-items__link');

	const navigationItems = navItems.map((item, index) => {
		const delay = index * MENU_ITEM_TRANSITION_DELAY + INITIAL_TRANSITION_DELAY;

		return (
			<li key={item.id} className={itemClasses} style={{ animationDelay: `${delay}s` }}>
				<Link to={item.path} className={linkClasses}>
					{t(item.label)}
				</Link>
			</li>
		);
	});

	return (
		<nav>
			<ul className={listClasses}>{navigationItems}</ul>
		</nav>
	);
};
