import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { Radio } from '@vn-ecommerce/ui-kit/atoms/radio/Radio';
import classNames from 'classnames/bind';
import { Sorting } from '@frontend/types/filters';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectTabsSorting, selectTabsSortingTypes } from '@frontend/store/selectors/tabs';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import { tabsActions } from '@frontend/store/tabs/tabs-slice';
import { useScrollLock } from '@frontend/libs/scroll';
import styles from './SortingPopup.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const SortingPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');
	const sorting = useAppSelector(selectTabsSorting);
	const sortingTypes = useAppSelector(selectTabsSortingTypes);
	const dispatch = useAppDispatch();
	const [sortBy, setSortBy] = useState(sorting || sortingTypes[0]);

	useScrollLock();

	const handleSortSelect = (value: string) => {
		setSortBy(value as Sorting);
	};

	const handleApply = () => {
		dispatch(tabsActions.setSorting(sortBy));
		onClose();
	};

	const popupClasses = cx('sorting-popup');
	const itemsClasses = cx('sorting-popup__items');
	const radioClasses = cx('sorting-popup__radio');

	const sortingTypesList = sortingTypes.map((sortingType) => (
		<Radio
			key={sortingType}
			group="filter"
			value={sortingType}
			onChange={handleSortSelect}
			checked={sortBy === sortingType}
			className={radioClasses}>
			{t(`filters.${sortingType}`)}
		</Radio>
	));

	return (
		<FullscreenPopup title={t('filters.sorting')} onClose={onClose}>
			<div className={popupClasses}>
				<fieldset className={itemsClasses}>{sortingTypesList}</fieldset>
				<Button onClick={handleApply}>{t('buttons.apply')}</Button>
			</div>
		</FullscreenPopup>
	);
};
