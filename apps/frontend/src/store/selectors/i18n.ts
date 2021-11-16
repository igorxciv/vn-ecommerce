import { RootState } from '../store';

export const selectLocale = (state: RootState) => state.i18n.locale;
export const selectLanguagesMap = (state: RootState) => state.i18n.languagesMap;
