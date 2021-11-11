import { RootState } from '../store';

export const selectNavigationItems = (state: RootState) => state.navigation.items;
