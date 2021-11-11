import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
	name: 'navigation',
	initialState: {
		items: [
			{
				id: 'tabs',
				label: 'tabs',
				path: '/tabs',
			},
			{
				id: 'courses',
				label: 'courses',
				path: '/courses',
			},
			{
				id: 'analysis',
				path: '/analysis',
				label: 'analysis',
			},
			{
				id: 'guitar-suggest',
				path: '/guitar-suggest',
				label: 'guitar_recommendation',
			},
		],
	},
	reducers: {},
});

export const navigationReducer = navigationSlice.reducer;
