import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@frontend/libs/title';
import { Video } from '@vn-ecommerce/ui-kit/atoms/video';
import classNames from 'classnames/bind';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export const Home: FC = () => {
	const { t } = useTranslation('common');

	useTitle(`${t('logo1')} ${t('logo2')} | ${t('page_title')}`);

	const homeClasses = cx('home');
	const titleClasses = cx('home__title');
	const subTitleClasses = cx('home__sub-title');
	const selectCourseClasses = cx('home__select-course');

	return (
		<div className={homeClasses}>
			<Video src="http://localhost:3000/videos/venera/venera.m3u8" />
			<h1 className={titleClasses}>{t('pages.home.main_title')}</h1>
			<h5 className={subTitleClasses}>{t('pages.home.sub_title')}</h5>
			<Button className={selectCourseClasses}>{t('pages.home.select_course')}</Button>
		</div>
	);
};
