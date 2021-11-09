import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { setupLocalization } from './app/initialization';
import { Root } from './app/Root';

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root'),
);

(async () => {
	await setupLocalization();
})();
