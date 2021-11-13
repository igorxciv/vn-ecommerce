import { FC, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { useAppSelector } from '@frontend/store/hooks';
import { selectLanguage, selectLocale } from '@frontend/store/selectors/i18n';
import { ReactComponent as ChevronIcon } from '@vn-ecommerce/ui-kit/icons/chevron.svg';
import { useClickOutside } from '@frontend/libs/interaction';
import { LanguagesList } from '@frontend/common/header/header-menu/left-menu/language-selector/languages-list';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import styles from './LanguageSelector.module.scss';

const cx = classNames.bind(styles);

export const LanguageSelector: FC = () => {
	const selectedLocale = useAppSelector(selectLocale);
	const language = useAppSelector(selectLanguage);

	const listRef = useRef<HTMLDivElement>(null);
	const selectorRef = useRef<HTMLDivElement>(null);
	const [opened, setOpened] = useState(false);

	const handleSelectorClick = () => {
		setOpened(!opened);
	};

	const handleSelectLanguage = () => {
		setOpened(false);
	};

	useClickOutside(selectorRef, () => {
		setOpened(false);
	});

	const selectorClasses = cx('language-selector');
	const buttonClasses = cx('language-selector__button');
	const languageClasses = cx('language-selector__language');
	const chevronClasses = cx('language-selector__chevron', { 'language-selector__chevron--expanded': opened });
	const iconClasses = cx('language-selector__icon');

	const languagesList = (
		<Transition nodeRef={listRef} in={opened} mountOnEnter unmountOnExit timeout={{ exit: TransitionDuration.LanguageSelectorOpen }}>
			{(state) => (
				<div ref={listRef} className={cx('language-selector__languages', `language-selector__languages--${state}`)}>
					<LanguagesList selectedLocale={selectedLocale} onSelect={handleSelectLanguage} />
				</div>
			)}
		</Transition>
	);

	return (
		<div ref={selectorRef} className={selectorClasses}>
			<button onClick={handleSelectorClick} className={buttonClasses}>
				<div className={iconClasses}>
					<svg>
						<use xlinkHref={`/assets/flag-icons.svg#flag-${selectedLocale}`} />
					</svg>
				</div>
				<span className={languageClasses}>{language}</span>
				<ChevronIcon className={chevronClasses} />
			</button>
			{languagesList}
		</div>
	);
};
