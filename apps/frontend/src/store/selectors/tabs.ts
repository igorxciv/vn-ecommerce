import { RootState } from '../store';

export const selectTabs = (state: RootState) => state.tabs.tabs;
export const selectTabsError = (state: RootState) => state.tabs.error;
export const selectTabsSortingTypes = (state: RootState) => state.tabs.sortingTypes;
export const selectTabsSorting = (state: RootState) => state.tabs.selectedSorting;
