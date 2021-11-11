import { createSlice } from '@reduxjs/toolkit';

const i18nSlice = createSlice({
	name: 'i18n',
	initialState: {
		locale: 'en',
	},
	reducers: {
		setLocale: (state, action) => {
			state.locale = action.payload;
		},
	},
});

export const { setLocale } = i18nSlice.actions;
export const i18nReducer = i18nSlice.reducer;
