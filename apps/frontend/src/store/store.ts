import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer } from './navigation';
import { i18nReducer } from './i18n';

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
		i18n: i18nReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
