import { createSlice } from '@reduxjs/toolkit';
import { setLocaleAsync } from './i18n-thunks';

const i18nSlice = createSlice({
	name: 'i18n',
	initialState: {
		locale: 'en',
		language: 'English',
	},
	reducers: {
		setLocale: (state, action) => {
			state.locale = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setLocaleAsync.fulfilled, (state, { payload }) => {
			state.locale = payload;
		});
	},
});

export const { setLocale } = i18nSlice.actions;
export const i18nReducer = i18nSlice.reducer;
