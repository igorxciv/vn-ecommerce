import { FC } from 'react';
import { DropdownButton } from '@vn-ecommerce/ui-kit/atoms/dropdown-button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './FiltersPanel.module.scss';

const cx = classNames.bind(styles);

export const FiltersPanel: FC = () => {
	const { t } = useTranslation('common');

	const handleFilterClick = () => {
		console.log('filter click');
	};

	const handleSortingClick = () => {
		console.log('sorting click');
	};

	const panelClasses = cx('filters-panel');

	return (
		<div className={panelClasses}>
			<DropdownButton onClick={handleFilterClick}>{t('filters.filter')}</DropdownButton>
			<DropdownButton onClick={handleSortingClick}>{t('filters.sorting')}</DropdownButton>
		</div>
	);
};
