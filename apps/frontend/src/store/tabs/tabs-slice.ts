import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tab } from '@frontend/api/tabs/types';
import { Sorting } from '@frontend/types/filters';
import { fetchTabsAsync } from './tabs-thunks';

type TabsState = {
	loading: boolean;
	error: string | null;
	tabs: Tab[];
	sortingTypes: Sorting[];
	selectedSorting: Sorting | null;
	filters: {
		artist: string[];
	};
	selectedFilters: {
		artist: string[];
	};
};

const tabsSlice = createSlice({
	name: 'tabs',
	initialState: {
		tabs: [],
		loading: false,
		error: null,
		sortingTypes: ['newest', 'best_selling', 'highest_price', 'lowest_price'],
		selectedSorting: null,
		filters: {
			artist: ['Arslan', 'Ivan Zaharenka', 'Linkin Park', 'One Republic', 'Агутин'],
		},
		selectedFilters: {
			artist: [],
		},
	} as TabsState,
	reducers: {
		setSorting: (state: TabsState, action: PayloadAction<Sorting>) => {
			state.selectedSorting = action.payload;
		},
		setFilter: (state: TabsState, action: PayloadAction<string>) => {
			state.selectedFilters.artist.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTabsAsync.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTabsAsync.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.error = null;
				state.tabs = payload;
			})
			.addCase(fetchTabsAsync.rejected, (state) => {
				state.loading = false;
				state.error = 'Error fetching tabs';
			});
	},
});

export const { name: tabsReducerName, reducer: tabsReducer, actions: tabsActions } = tabsSlice;
