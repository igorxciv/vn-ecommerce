import { RootState } from '../store';

export const selectTabs = (state: RootState) => state.tabs.tabs;
export const selectTabsLoading = (state: RootState) => state.tabs.loading;
export const selectTabsError = (state: RootState) => state.tabs.error;
export const selectTabsSorting = (state: RootState) => state.tabs.sorting;
