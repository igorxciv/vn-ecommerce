// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { EnvironmentConfig } from './types';

export const environment: EnvironmentConfig = {
	production: false,
	api: {
		tabs: 'https://vanya.school:8083',
	},
};
