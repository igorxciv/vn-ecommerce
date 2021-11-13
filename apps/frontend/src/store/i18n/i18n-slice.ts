import { createSlice } from '@reduxjs/toolkit';
import { setLocaleAsync } from './i18n-thunks';
import { i18nState } from './types';

const i18nSlice = createSlice({
	name: 'i18n',
	initialState: {
		locale: 'en',
		language: 'English',
		languagesMap: {
			en: 'English',
			ru: 'Русский',
		},
	} as i18nState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setLocaleAsync.fulfilled, (state, { payload }) => {
			state.locale = payload;
			state.language = state.languagesMap[payload];
		});
	},
});

export const i18nReducer = i18nSlice.reducer;
