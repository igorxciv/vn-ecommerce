import React, { FC, forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import { NativeValue } from './types';
import styles from './NativeSelect.module.scss';
import { useSelect } from '../select-context';

const cx = classNames.bind(styles);

type Props = {
	values: NativeValue[];
} & HTMLAttributes<HTMLSelectElement>;

export const NativeSelect = forwardRef<HTMLSelectElement, Props>((props: Props, ref) => {
	const { values, className, ...rest } = props;
	const { selectedValue, onChange } = useSelect();

	const selectClasses = cx('native-select', className);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	};

	const items = values.map((v) => (
		<option key={v.value} value={v.value}>
			{v.label}
		</option>
	));

	return (
		<select ref={ref} value={selectedValue} onBlur={handleChange} onChange={handleChange} className={selectClasses} {...rest}>
			{items}
		</select>
	);
});

NativeSelect.displayName = 'NativeSelect';
