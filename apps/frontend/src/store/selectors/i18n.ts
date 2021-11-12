import { RootState } from '../store';

export const selectLocale = (state: RootState) => state.i18n.locale;
export const selectLanguage = (state: RootState) => state.i18n.language;
