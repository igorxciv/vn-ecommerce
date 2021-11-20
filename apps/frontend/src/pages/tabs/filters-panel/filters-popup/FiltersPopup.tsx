import React, { FC, useState } from 'react';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@vn-ecommerce/ui-kit/atoms/accordion';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectTabsArtists, selectTabsFilterSelectedArtists } from '@frontend/store/selectors/tabs';
import { Checkbox } from '@vn-ecommerce/ui-kit/atoms/checkbox';
import { tabsActions } from '@frontend/store/tabs/tabs-slice';
import styles from './FiltersPopup.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const FiltersPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');
	const dispatch = useAppDispatch();
	const artists = useAppSelector(selectTabsArtists);
	const selectedFilterArtists = useAppSelector(selectTabsFilterSelectedArtists);
	const [selectedArtists, setSelectedArtists] = useState(selectedFilterArtists);

	const handleApply = () => {
		dispatch(tabsActions.setArtistFilters(selectedArtists));
		onClose();
	};

	const handleFilterSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedArtists({
			...selectedArtists,
			[event.target.value]: event.target.checked,
		});
	};

	const artistsFilters = artists.map(({ value, label }) => (
		<Checkbox key={value} value={value} onChange={handleFilterSelect} checked={selectedArtists[value]}>
			{label}
		</Checkbox>
	));

	const buttonClasses = cx('filters-popup__apply');
	const artistsClasses = cx('filters-popup__artists');

	return (
		<FullscreenPopup title={t('filters.filter')} onClose={onClose}>
			<Accordion label={t('filters.artist')}>
				<div className={artistsClasses}>{artistsFilters}</div>
			</Accordion>
			<div className={buttonClasses}>
				<Button onClick={handleApply}>{t('buttons.apply')}</Button>
			</div>
		</FullscreenPopup>
	);
};
