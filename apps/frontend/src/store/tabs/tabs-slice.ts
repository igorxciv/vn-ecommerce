import { createSlice } from '@reduxjs/toolkit';
import { fetchTabsAsync } from './tabs-thunks';

type TabsState = {
	loading: boolean;
	error: string | null;
	tabs: {
		[id: string]: object;
	};
};

// eslint-disable-next-line @typescript-eslint/ban-types
const tabsSlice = createSlice<TabsState, {}, 'tabs'>({
	name: 'tabs',
	initialState: {
		tabs: {},
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
			.addCase(fetchTabsAsync.rejected, (state) => {
				state.loading = false;
				state.error = 'Error fetching tabs';
			});
	},
});

export const { name: tabsReducerName, reducer: tabsReducer } = tabsSlice;
