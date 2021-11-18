import { FC, useState } from 'react';
import { DropdownButton } from '@vn-ecommerce/ui-kit/atoms/dropdown-button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { useScrollDirectionChange, useTopState } from '@frontend/libs/scroll';
import { useAppSelector } from '@frontend/store/hooks';
import { selectTabsSorting } from '@frontend/store/selectors/tabs';
import { SortingPopup } from './sorting-popup';
import { FiltersPopup } from './filters-popup';
import styles from './FiltersPanel.module.scss';

const cx = classNames.bind(styles);

export const FiltersPanel: FC = () => {
	const [sortingOpened, setSortingOpened] = useState(false);
	const [filtersOpened, setFiltersOpened] = useState(false);
	const { t } = useTranslation('common');
	const isTop = useTopState();
	const direction = useScrollDirectionChange();
	const sorting = useAppSelector(selectTabsSorting);
	const compact = direction === 'down';

	const handleFilterClick = () => {
		setFiltersOpened(!filtersOpened);
	};

	const handleSortingClick = () => {
		setSortingOpened(!sortingOpened);
	};

	const sortingLabel = sorting ? t(`filters.${sorting}`) : t('filters.sorting');

	const panelClasses = cx('filters-panel', { 'filters-panel--top': isTop, 'filters-panel--compact': compact });
	const innerClasses = cx('filters-panel__inner');

	const filtersPopup = filtersOpened && <FiltersPopup onClose={handleFilterClick} />;
	const sortingPopup = sortingOpened && <SortingPopup onClose={handleSortingClick} />;

	return (
		<div className={panelClasses}>
			<div className={innerClasses}>
				<DropdownButton onClick={handleFilterClick}>{t('filters.filter')}</DropdownButton>
				<DropdownButton onClick={handleSortingClick}>{sortingLabel}</DropdownButton>
			</div>
			{filtersPopup}
			{sortingPopup}
		</div>
	);
};
