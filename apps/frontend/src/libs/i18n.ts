export const LANGUAGE_MAP = {
	en: 'English',
	ru: 'Русский',
};

export type Locale = keyof typeof LANGUAGE_MAP;

export type Language = typeof LANGUAGE_MAP[Locale];
