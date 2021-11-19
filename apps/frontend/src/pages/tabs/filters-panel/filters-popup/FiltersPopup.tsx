import { FC } from 'react';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@vn-ecommerce/ui-kit/atoms/accordion';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import classNames from 'classnames/bind';
import styles from './FiltersPopup.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const FiltersPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');

	const handleApply = () => {
		onClose();
	};

	const buttonClasses = cx('filters-popup__apply');

	return (
		<FullscreenPopup title={t('filters.filter')} onClose={onClose}>
			<Accordion label={t('filters.artist')}>
				<div>first</div>
				<div>second</div>
				<div>third</div>
			</Accordion>
			<div className={buttonClasses}>
				<Button onClick={handleApply}>{t('buttons.apply')}</Button>
			</div>
		</FullscreenPopup>
	);
};
