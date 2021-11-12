import i18next from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Locale } from '@frontend/libs/i18n';

export const setLocaleAsync = createAsyncThunk<Locale, Locale>('i18n/setLanguage', async (locale: Locale) => {
	await i18next.changeLanguage(locale);

	return locale;
});
