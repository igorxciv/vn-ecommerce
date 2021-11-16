import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectLanguagesMap, selectLocale } from '@frontend/store/selectors/i18n';
import { Select, Option } from '@vn-ecommerce/ui-kit/atoms/select';
import { setLocaleAsync } from '@frontend/store/i18n';
import { makeFlagIcon } from '@vn-ecommerce/ui-kit/icons/flags';
import styles from './LanguageSelector.module.scss';

const cx = classNames.bind(styles);

type Props = HTMLAttributes<HTMLDivElement>;

export const LanguageSelector: FC<Props> = (props: Props) => {
	const locale = useAppSelector(selectLocale);
	const languages = useAppSelector(selectLanguagesMap);
	const dispatch = useAppDispatch();

	const handleSelectLanguage = (locale: string) => {
		dispatch(setLocaleAsync(locale));
	};

	const itemClasses = cx('language-selector__item');
	const iconClasses = cx('language-selector__icon');

	const items = Object.keys(languages).map((locale) => {
		const Icon = makeFlagIcon(locale);

		return (
			<Option key={locale} value={locale}>
				<div className={itemClasses}>
					<Icon className={iconClasses} />
					{languages[locale]}
				</div>
			</Option>
		);
	});

	const CurrentLanguageIcon = makeFlagIcon(locale);
	const label = (
		<div className={itemClasses}>
			<CurrentLanguageIcon className={iconClasses} />
			{languages[locale]}
		</div>
	);

	return (
		<Select onChange={handleSelectLanguage} label={label} value={locale}>
			{items}
		</Select>
	);
};
