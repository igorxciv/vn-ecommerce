import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

type Props = {
	group: string;
	value: string;
	checked?: boolean;
	onChange: (value: string) => void;
	className?: string;
};

export const Radio: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, value, checked = false, className, onChange } = props;

	const radioClasses = cx('radio', className);
	const inputClasses = cx('radio__input');
	const outerClasses = cx('radio__outer');
	const innerClasses = cx('radio__inner');
	const labelClasses = cx('radio__label');

	const handleChange = () => {
		onChange(value);
	};

	return (
		<label className={radioClasses}>
			<input type="radio" value={value} className={inputClasses} checked={checked} onChange={handleChange} />
			<span className={outerClasses}>
				<span className={innerClasses} />
			</span>
			<span className={labelClasses}>{children}</span>
		</label>
	);
};
