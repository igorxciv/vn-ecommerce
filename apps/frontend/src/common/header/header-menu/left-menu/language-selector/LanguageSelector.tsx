import { FC } from 'react';
import classNames from 'classnames/bind';
import { DropdownButton } from '@vn-ecommerce/ui-kit/atoms/dropdown-button';
import { useAppSelector } from '@frontend/store/hooks';
import { selectLanguage, selectLocale } from '@frontend/store/selectors/i18n';
import styles from './LanguageSelector.module.scss';

const cx = classNames.bind(styles);

export const LanguageSelector: FC = () => {
	const locale = useAppSelector(selectLocale);
	const language = useAppSelector(selectLanguage);

	const selectorClasses = cx('language-selector');
	const languageClasses = cx('language-selector__language');
	const iconClasses = cx('language-selector__icon');

	return (
		<DropdownButton>
			<div className={selectorClasses}>
				<div className={iconClasses}>
					<svg>
						<use xlinkHref={`/assets/flag-icons.svg#flag-${locale}`} />
					</svg>
				</div>
				<span className={languageClasses}>{language}</span>
			</div>
		</DropdownButton>
	);
};
