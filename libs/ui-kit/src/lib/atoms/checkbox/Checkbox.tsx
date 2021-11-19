import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

type Props = {
	checked?: boolean;
	value: string;
	onChange: (value: string) => void;
} & HTMLAttributes<HTMLLabelElement>;

export const Checkbox: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { checked = false, value, children, onChange } = props;

	const handleChange = () => {
		onChange(value);
	};

	const checkboxClasses = cx('checkbox');
	const inputClasses = cx('checkbox__input');
	const boxClasses = cx('checkbox__box');
	const markClasses = cx('checkbox__mark');

	return (
		<label className={checkboxClasses}>
			<input type="checkbox" value={value} onChange={handleChange} checked={checked} className={inputClasses} />
			<div className={boxClasses}>
				<div className={markClasses} />
			</div>
			{children}
		</label>
	);
};
