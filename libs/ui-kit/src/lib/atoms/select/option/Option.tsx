import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';
import styles from './Option.module.scss';
import { useSelect } from '../select-context';

const cx = classNames.bind(styles);

type Props = {
	value: string;
};

export const Option = (props: PropsWithChildren<Props>) => {
	const { value, children } = props;

	const { selectedValue, onChange } = useSelect();

	const handleClick = () => {
		onChange(value);
	};

	const optionClasses = cx('option', { 'option--selected': selectedValue === value });
	const buttonClasses = cx('option__button');

	return (
		<li className={optionClasses}>
			<button className={buttonClasses} onClick={handleClick}>
				{children}
			</button>
		</li>
	);
};
