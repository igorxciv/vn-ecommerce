import React, { PropsWithChildren, useState, useRef, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { isMobileDevice } from '@vn-ecommerce/ui-kit/utils/device-detection';
import { NativeSelect, NativeValue } from './native-select';
import { SelectProvider } from './select-context';
import styles from './Select.module.scss';
import { TransitionDuration } from '../../design/constants';
import { useClickOutside } from '../../utils/interaction';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

const cx = classNames.bind(styles);

type Props = {
	onChange: (value: string) => void;
	value: string;
	label?: ReactNode;
	nativeValues: NativeValue[];
};

export const Select = (props: PropsWithChildren<Props>) => {
	const { value, children, label = '', nativeValues, onChange } = props;

	const [opened, setOpened] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const nativeSelectRef = useRef<HTMLSelectElement>(null);

	const handleSelect = (value: string) => {
		onChange(value);
		setOpened(false);
	};

	const handleToggle = () => {
		if (nativeSelectRef.current) {
			nativeSelectRef.current.dispatchEvent(new MouseEvent('mousedown'));
		}
		setOpened(!opened);
	};

	useClickOutside(selectRef, () => setOpened(false));

	const selectClasses = cx('select');
	const buttonClasses = cx('select__button');
	const chevronClasses = cx('select__chevron', { 'select__chevron--opened': opened });
	const listClasses = cx('select__list');

	const items = isMobileDevice() ? (
		<NativeSelect ref={nativeSelectRef} values={nativeValues} />
	) : (
		<Transition nodeRef={listRef} in={opened} timeout={{ exit: TransitionDuration.SelectAppear }} mountOnEnter unmountOnExit>
			{(state) => (
				<ul ref={listRef} className={cx(listClasses, { 'select__list--exiting': state === 'exiting' })}>
					{children}
				</ul>
			)}
		</Transition>
	);

	return (
		<SelectProvider value={value} onChange={handleSelect}>
			<div ref={selectRef} className={selectClasses}>
				<button className={buttonClasses} onClick={handleToggle}>
					<span>{label}</span>
					<ChevronIcon className={chevronClasses} />
				</button>
				{items}
			</div>
		</SelectProvider>
	);
};
