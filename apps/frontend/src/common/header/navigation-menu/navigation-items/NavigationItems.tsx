import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './NavigationItems.module.scss';

const cx = classNames.bind(styles);

export const NavigationItems: FC = () => {
	const { t } = useTranslation('navigation');

	const navItemsClasses = cx('nav-items');
	const itemClasses = cx('nav-items__item');
	const linkClasses = cx('nav-items__link');

	return (
		<ul className={navItemsClasses}>
			<li className={itemClasses}>
				<Link to="/tabs" className={linkClasses}>
					{t('tabs')}
				</Link>
			</li>
			<li className={itemClasses}>
				<Link to="/courses" className={linkClasses}>
					{t('courses')}
				</Link>
			</li>
			<li className={itemClasses}>
				<Link to="/analysis" className={linkClasses}>
					{t('analysis')}
				</Link>
			</li>
			<li className={itemClasses}>
				<Link to="/guitar-suggest" className={linkClasses}>
					{t('guitar_recommendation')}
				</Link>
			</li>
		</ul>
	);
};
