import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTabs, fetchTabById } from '@frontend/api/tabs/tabs';
import { Tab } from '@frontend/api/tabs/types';

export const fetchTabsAsync = createAsyncThunk<Tab[]>('tabs/load', async () => {
	return await fetchTabs();
});

export const fetchTabByIdAsync = createAsyncThunk<Tab, string>('tabs/loadById', async (id: string) => {
	return await fetchTabById(id);
});
