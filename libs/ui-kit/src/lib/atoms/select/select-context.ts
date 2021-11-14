import { createContext } from 'react';

export const SelectContext = createContext({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChange: (value: string) => {},
	value: '',
});
