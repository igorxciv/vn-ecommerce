import { FC } from 'react';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@vn-ecommerce/ui-kit/atoms/accordion';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectTabsArtists, selectTabsFilters } from '@frontend/store/selectors/tabs';
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

	const artists = useAppSelector(selectTabsArtists);
	const dispatch = useAppDispatch();

	const handleApply = () => {
		onClose();
	};

	const handleFilterSelect = () => {
		dispatch(tabsActions.setFilter(''));
	};

	const artistsFilters = artists.map((artist) => (
		<Checkbox key={artist} value={artist} onChange={handleFilterSelect}>
			{artist}
		</Checkbox>
	));

	const buttonClasses = cx('filters-popup__apply');

	return (
		<FullscreenPopup title={t('filters.filter')} onClose={onClose}>
			<Accordion label={t('filters.artist')}>{artistsFilters}</Accordion>
			<div className={buttonClasses}>
				<Button onClick={handleApply}>{t('buttons.apply')}</Button>
			</div>
		</FullscreenPopup>
	);
};
