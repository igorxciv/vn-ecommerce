import { ReactComponent as USFlag } from './us.svg';
import { ReactComponent as RUFlag } from './ru.svg';

const FLAGS_MAP = {
	en: USFlag,
	ru: RUFlag,
};

export function makeFlagIcon(locale: string) {
	switch (locale) {
		case 'en':
			return FLAGS_MAP.en;
		case 'ru':
			return FLAGS_MAP.ru;
		default:
			return FLAGS_MAP.en;
	}
}
