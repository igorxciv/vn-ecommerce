import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { Error } from '@vn-ecommerce/ui-kit/atoms/error';
import { useTabs } from './hooks';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

export const Tabs: FC = () => {
	const { t } = useTranslation('navigation');
	const { tabs, error } = useTabs();

	const tabsClasses = cx('tabs');
	const titleClasses = cx('tabs__title');
	const errorClasses = cx('tabs__error');

	const tabsList = error ? <Error className={errorClasses}>{error}</Error> : <div />;

	return (
		<section className={tabsClasses}>
			<h1 className={titleClasses}>{t('tabs')}</h1>
			{tabsList}
		</section>
	);
};
