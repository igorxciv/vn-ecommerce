import { createSlice } from '@reduxjs/toolkit';
import { Language, Locale, LANGUAGE_MAP } from '@frontend/libs/i18n';
import { setLocaleAsync } from './i18n-thunks';

type InitialState = {
	locale: Locale;
	language: Language;
};

const i18nSlice = createSlice({
	name: 'i18n',
	initialState: {
		locale: 'en',
		language: 'English',
	} as InitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setLocaleAsync.fulfilled, (state, { payload }) => {
			state.locale = payload;
			state.language = LANGUAGE_MAP[payload];
		});
	},
});

export const i18nReducer = i18nSlice.reducer;
