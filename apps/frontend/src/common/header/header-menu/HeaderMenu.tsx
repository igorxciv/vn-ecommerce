import { FC } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Logo } from '@vn-ecommerce/ui-kit/atoms/logo';
import { useScreenSizeMatch } from '@frontend/libs/screen-size';
import { ScreenSizes } from '@vn-ecommerce/ui-kit/design/constants';
import { LeftMenu } from './left-menu';
import { RightMenu } from './right-menu';
import styles from './HeaderMenu.module.scss';

const cx = classNames.bind(styles);

export const HeaderMenu: FC = () => {
	const headerMenuClasses = cx('header-menu');
	const { t } = useTranslation('common');

	const isMobile = useScreenSizeMatch({ maxWidth: ScreenSizes.Large });

	const leftMenu = isMobile ? <LeftMenu /> : null;

	return (
		<div className={headerMenuClasses}>
			{leftMenu}
			<Logo firstCaption={t('logo1')} secondCaption={t('logo2')} />
			<RightMenu />
		</div>
	);
};
