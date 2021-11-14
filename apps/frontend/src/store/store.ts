import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer, navigationReducerName } from './navigation';
import { i18nReducer, i18nReducerName } from './i18n';
import { tabsReducer, tabsReducerName } from './tabs';

export const store = configureStore({
	reducer: {
		[navigationReducerName]: navigationReducer,
		[i18nReducerName]: i18nReducer,
		[tabsReducerName]: tabsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
