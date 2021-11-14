import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { selectTabs, selectTabsError } from '@frontend/store/selectors/tabs';
import { fetchTabsAsync } from '@frontend/store/tabs/tabs-thunks';

export function useTabs() {
	const dispatch = useAppDispatch();
	const tabs = useAppSelector(selectTabs);
	const error = useAppSelector(selectTabsError);

	useEffect(() => {
		dispatch(fetchTabsAsync());
	}, [dispatch]);

	return { tabs, error };
}
