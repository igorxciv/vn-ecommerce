import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectTabs = (state: RootState) => state.tabs.tabs;
export const selectTabsError = (state: RootState) => state.tabs.error;
export const selectTabsSortingTypes = (state: RootState) => state.tabs.sortingTypes;
export const selectTabsSorting = (state: RootState) => state.tabs.selectedSorting;
export const selectTabsFilters = (state: RootState) => state.tabs.filters;

export const selectTabsArtists = createSelector(selectTabsFilters, (filters) => filters.artist || []);
export const selectTabsSelectedFilters = (state: RootState) => state.tabs.selectedFilters;
