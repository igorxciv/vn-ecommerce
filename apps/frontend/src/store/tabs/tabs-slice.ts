import { createSlice } from '@reduxjs/toolkit';
import { Tab } from '@frontend/api/tabs/types';
import { fetchTabsAsync } from './tabs-thunks';

type TabsState = {
	loading: boolean;
	error: string | null;
	tabs: Tab[];
};

// eslint-disable-next-line @typescript-eslint/ban-types
const tabsSlice = createSlice<TabsState, {}, 'tabs'>({
	name: 'tabs',
	initialState: {
		tabs: [],
		loading: false,
		error: null,
	},
	reducers: {},
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

export const { name: tabsReducerName, reducer: tabsReducer } = tabsSlice;
