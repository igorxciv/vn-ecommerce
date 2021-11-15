import { ContextType, createContext, FC, PropsWithChildren, useContext } from 'react';

const SelectContext = createContext<{ selectedValue: string; onChange: (v: string) => void } | undefined>(undefined);

type Props = {
	value?: string;
	onChange: (v: string) => void;
};

export function useSelect() {
	const context = useContext(SelectContext);

	if (context === undefined) {
		throw new Error('useSelect must be used within a SelectContext');
	}

	return context;
}

export const SelectProvider: FC<Props> = ({ children, value, onChange }: PropsWithChildren<Props>) => {
	const ctxValue = { selectedValue: value, onChange } as ContextType<typeof SelectContext>;

	return <SelectContext.Provider value={ctxValue}>{children}</SelectContext.Provider>;
};
