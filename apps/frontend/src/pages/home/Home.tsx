import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@frontend/libs/title';
import { Video } from '@vn-ecommerce/ui-kit/atoms/video';
import classNames from 'classnames/bind';
import { Button } from '@vn-ecommerce/ui-kit/atoms/button';
import { Image } from '@vn-ecommerce/ui-kit/atoms/image/Image';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export const Home: FC = () => {
	const { t } = useTranslation('common');
	const { t: tc } = useTranslation('courses');

	useTitle(`${t('logo1')} ${t('logo2')} | ${t('page_title')}`);

	const homeClasses = cx('home');
	const titleClasses = cx('home__title');
	const subTitleClasses = cx('home__sub-title');
	const imageClasses = cx('home__image');
	const selectCourseClasses = cx('home__select-course');
	const courseClasses = cx('home__course');
	const courseTitleClasses = cx('home__course-title');
	const courseImageClasses = cx('home__course-image');
	const courseShortDescriptionClasses = cx('home__course-short-description');
	const descriptionClasses = cx('home__description');
	const nameClasses = cx('home__name');
	const achievementsClasses = cx('home__achievements');

	return (
		<div className={homeClasses}>
			<Video src="http://localhost:3000/videos/venera/venera.m3u8" />
			<h1 className={titleClasses}>{t('pages.home.main_title')}</h1>
			<h5 className={subTitleClasses}>{t('pages.home.sub_title')}</h5>
			<Button className={selectCourseClasses}>{t('pages.home.select_course')}</Button>
			<Image
				staticHost="http://localhost:3000/images/home"
				name="ivan_and_guitar"
				ext="jpg"
				ratio="256/281"
				breakpoints={{ s: 768 }}
				className={imageClasses}
			/>
			<article className={courseClasses}>
				<Image
					staticHost="http://localhost:3000/images/course"
					name="anti_music_school"
					breakpoints={{ s: 300 }}
					ratio="300/193"
					ext="jpg"
					className={courseImageClasses}
				/>
				<h2 className={courseTitleClasses}>{tc('anti_music_school.title')}</h2>
				<h5 className={courseShortDescriptionClasses}>{tc('anti_music_school.short_description')}</h5>
				<Button type="transparent">{t('pages.home.course_details')}</Button>
			</article>

			<article className={courseClasses}>
				<Image
					staticHost="http://localhost:3000/images/course"
					name="guitar_from_zero"
					breakpoints={{ s: 300 }}
					ratio="300/193"
					ext="jpg"
					className={courseImageClasses}
				/>
				<h2 className={courseTitleClasses}>{tc('guitar_from_zero.title')}</h2>
				<h5 className={courseShortDescriptionClasses}>{tc('guitar_from_zero.short_description')}</h5>
				<Button type="transparent">{t('pages.home.course_details')}</Button>
			</article>

			<section className={descriptionClasses}>
				<h1 className={nameClasses}>{t('name')}</h1>
			</section>

			<ul className={achievementsClasses}>
				<li>{t('achievements.first')}</li>
			</ul>
		</div>
	);
};
