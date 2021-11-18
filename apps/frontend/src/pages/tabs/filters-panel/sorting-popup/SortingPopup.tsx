import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FullscreenPopup } from '@vn-ecommerce/ui-kit/atoms/fullscreen-popup';

type Props = {
	onClose: () => void;
};

export const SortingPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');

	return (
		<FullscreenPopup title={t('filters.sorting')} onClose={onClose}>
			me
		</FullscreenPopup>
	);
};
