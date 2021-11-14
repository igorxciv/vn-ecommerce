import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTabs, fetchTabById } from '@frontend/api/tabs';

export const fetchTabsAsync = createAsyncThunk('tabs/load', async () => {
	return await fetchTabs();
});

export const fetchTabByIdAsync = createAsyncThunk('tabs/loadById', async (id: string) => {
	return await fetchTabById(id);
});
