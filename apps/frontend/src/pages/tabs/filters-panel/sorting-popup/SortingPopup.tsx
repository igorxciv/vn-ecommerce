import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { Radio } from '@vn-ecommerce/ui-kit/atoms/radio/Radio';
import classNames from 'classnames/bind';
import { Sorting } from '@frontend/types/filters';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectTabsSorting } from '@frontend/store/selectors/tabs';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import { tabsActions } from '@frontend/store/tabs/tabs-slice';
import styles from './SortingPopup.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const SortingPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');
	const sorting = useAppSelector(selectTabsSorting);
	const dispatch = useAppDispatch();
	const [sortBy, setSortBy] = useState(sorting);

	const popupClasses = cx('sorting-popup');
	const itemsClasses = cx('sorting-popup__items');
	const radioClasses = cx('sorting-popup__radio');

	const handleSortSelect = (value: string) => {
		setSortBy(value as Sorting);
	};

	const handleApply = () => {
		dispatch(tabsActions.setSorting(sortBy));
		onClose();
	};

	return (
		<FullscreenPopup title={t('filters.sorting')} onClose={onClose}>
			<div className={popupClasses}>
				<fieldset className={itemsClasses}>
					<Radio group="filter" value="newest" onChange={handleSortSelect} checked={sortBy === 'newest'} className={radioClasses}>
						{t('filters.newest')}
					</Radio>
					<Radio
						group="filter"
						value="best_selling"
						onChange={handleSortSelect}
						checked={sortBy === 'best_selling'}
						className={radioClasses}>
						{t('filters.best_selling')}
					</Radio>
					<Radio
						group="filter"
						value="highest_price"
						onChange={handleSortSelect}
						checked={sortBy === 'highest_price'}
						className={radioClasses}>
						{t('filters.highest_price')}
					</Radio>
					<Radio
						group="filter"
						value="lowest_price"
						onChange={handleSortSelect}
						checked={sortBy === 'lowest_price'}
						className={radioClasses}>
						{t('filters.lowest_price')}
					</Radio>
				</fieldset>
				<Button onClick={handleApply}>{t('buttons.apply')}</Button>
			</div>
		</FullscreenPopup>
	);
};
