import { FC } from 'react';
import classNames from 'classnames/bind';
import { ScreenSizes } from '@vn-ecommerce/ui-kit/design/constants';
import { useScreenSizeMatch } from '@frontend/libs/screen-size';
import { MobileMenu } from '@frontend/common/header/header-menu/left-menu/mobile-menu/MobileMenu';
import { LanguageSelector } from '@frontend/common/header/header-menu/left-menu/language-selector';
import styles from './LeftMenu.module.scss';

const cx = classNames.bind(styles);

export const LeftMenu: FC = () => {
	const isMobile = useScreenSizeMatch({ maxWidth: ScreenSizes.Large });

	const leftMenu = isMobile ? <MobileMenu /> : <LanguageSelector />;

	const leftMenuClasses = cx('left-menu');

	return <div className={leftMenuClasses}>{leftMenu}</div>;
};
