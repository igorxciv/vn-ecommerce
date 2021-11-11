import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { selectNavigationItems } from '@frontend/store/selectors/navigation';
import styles from './NavigationItems.module.scss';

const cx = classNames.bind(styles);

export const NavigationItems: FC = () => {
	const { t } = useTranslation('navigation');
	const items = useSelector(selectNavigationItems);

	const navItemsClasses = cx('nav-items');
	const itemClasses = cx('nav-items__item');
	const linkClasses = cx('nav-items__link');

	const navItems = items.map((item) => (
		<li key={item.id} className={itemClasses}>
			<Link to={item.path} className={linkClasses}>
				{t(item.label)}
			</Link>
		</li>
	));

	return <ul className={navItemsClasses}>{navItems}</ul>;
};
