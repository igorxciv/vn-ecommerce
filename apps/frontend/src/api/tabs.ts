import axios from 'axios';
import { environment } from '@frontend/environments/environment';

const apiClient = axios.create({
	baseURL: `${environment.api.tabs}/api/v1`,
});

export async function fetchTabs(): Promise<any[]> {
	const { data } = await apiClient.get<any[]>('/tabs');

	return data;
}

export async function fetchTabById(id: string): Promise<any> {
	const { data } = await apiClient.get<any>(`/tabs/${id}`);

	return data;
}

export async function downloadTab(id: string): Promise<void> {
	const response = await apiClient.get(`/tabs/download/${id}`, { responseType: 'blob' });

	const url = window.URL.createObjectURL(new Blob([response.data]));
	const link = document.createElement('a');

	link.href = url;
	document.body.appendChild(link);
	link.click();
	link.remove();
}
