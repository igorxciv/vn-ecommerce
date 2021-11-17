import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { ReactComponent as CrossIcon } from '@vn-ecommerce/ui-kit/icons/cross.svg';
import styles from './SortingPopup.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClose: () => void;
};

export const SortingPopup: FC<Props> = (props: Props) => {
	const { onClose } = props;
	const { t } = useTranslation('common');

	const popupClasses = cx('sorting-popup');
	const headClasses = cx('sorting-popup__head');
	const titleClasses = cx('sorting-popup__title');
	const closeClasses = cx('sorting-popup__close');
	const closeIconClasses = cx('sorting-popup__close-icon');

	const popup = (
		<div className={popupClasses}>
			<div className={headClasses}>
				<h1 className={titleClasses}>{t('filters.sorting')}</h1>
				<button className={closeClasses} onClick={onClose}>
					<CrossIcon className={closeIconClasses} />
				</button>
			</div>
		</div>
	);

	return createPortal(popup, document.body);
};
