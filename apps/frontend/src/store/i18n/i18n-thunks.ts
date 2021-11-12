import i18next from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setLocaleAsync = createAsyncThunk<string, string>('i18n/setLanguage', async (locale: string) => {
	await i18next.changeLanguage(locale);

	return locale;
});
