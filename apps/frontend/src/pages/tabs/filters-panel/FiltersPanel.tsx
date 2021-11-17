import { FC } from 'react';
import { DropdownButton } from '@vn-ecommerce/ui-kit/atoms/dropdown-button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { useScrollDirectionChange, useTopState } from '@frontend/libs/scroll';
import styles from './FiltersPanel.module.scss';

const cx = classNames.bind(styles);

export const FiltersPanel: FC = () => {
	const { t } = useTranslation('common');
	const isTop = useTopState();
	const direction = useScrollDirectionChange();
	const compact = direction === 'down';

	const handleFilterClick = () => {
		console.log('filter click');
	};

	const handleSortingClick = () => {
		console.log('sorting click');
	};

	const panelClasses = cx('filters-panel', { 'filters-panel--top': isTop, 'filters-panel--compact': compact });
	const innerClasses = cx('filters-panel__inner');

	return (
		<div className={panelClasses}>
			<div className={innerClasses}>
				<DropdownButton onClick={handleFilterClick}>{t('filters.filter')}</DropdownButton>
				<DropdownButton onClick={handleSortingClick}>{t('filters.sorting')}</DropdownButton>
			</div>
		</div>
	);
};
