import { FC } from 'react';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';
import { useTranslation } from 'react-i18next';

type Props = {
	onClose: () => void;
};

export const FiltersPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');

	return (
		<FullscreenPopup title={t('filters.filter')} onClose={onClose}>
			me
		</FullscreenPopup>
	);
};
