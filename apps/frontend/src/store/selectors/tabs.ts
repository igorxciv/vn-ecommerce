import { RootState } from '../store';

export const selectTabs = (state: RootState) => state.tabs.tabs;
export const selectTabsError = (state: RootState) => state.tabs.error;
export const selectTabsSortingTypes = (state: RootState) => state.tabs.sortingTypes;
export const selectTabsSorting = (state: RootState) => state.tabs.selectedSorting;
export const selectTabsArtists = (state: RootState) => state.tabs.filters.artist;
export const selectTabsFilterSelectedArtists = (state: RootState) => state.tabs.selectedFilters.artist;
export const selectSelectedFiltersAmount = (state: RootState) => Object.values(state.tabs.selectedFilters.artist).length;
