import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Suspense } from 'react';
import { Header } from '../common/header';
import { store } from '../store/store';

export const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<I18nextProvider i18n={i18next}>
					<Suspense fallback={<div />}>
						<Header />
					</Suspense>
				</I18nextProvider>
			</BrowserRouter>
		</Provider>
	);
};
