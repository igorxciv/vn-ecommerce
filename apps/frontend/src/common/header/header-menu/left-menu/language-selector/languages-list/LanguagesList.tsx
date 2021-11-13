import { FC } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectLanguagesMap } from '@frontend/store/selectors/i18n';
import { setLocaleAsync } from '@frontend/store/i18n';
import styles from './LanguagesList.module.scss';

const cx = classNames.bind(styles);

type Props = {
	selectedLocale: string;
	onSelect: (locale: string) => void;
};

export const LanguagesList: FC<Props> = (props: Props) => {
	const { selectedLocale, onSelect } = props;
	const languagesMap = useAppSelector(selectLanguagesMap);
	const dispatch = useAppDispatch();

	const listClasses = cx('languages-list');
	const itemClasses = cx('languages-list__item');
	const buttonClasses = cx('languages-list__button');
	const iconClasses = cx('languages-list__icon');

	const handleClick = (locale: string) => {
		dispatch(setLocaleAsync(locale));
		onSelect(locale);
	};

	const languages = Object.entries(languagesMap).map(([locale, language]) => (
		<li key={locale} className={cx(itemClasses, { 'languages-list__item--selected': selectedLocale === locale })}>
			<button className={buttonClasses} onClick={() => handleClick(locale)}>
				<div className={iconClasses}>
					<svg>
						<use xlinkHref={`/assets/flag-icons.svg#flag-${locale}`} />
					</svg>
				</div>
				{language}
			</button>
		</li>
	));

	return <ul className={listClasses}>{languages}</ul>;
};
