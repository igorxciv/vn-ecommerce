import classNames from 'classnames/bind';
import { PropsWithChildren, useContext } from 'react';
import styles from './Option.module.scss';
import { SelectContext } from '../select-context';

const cx = classNames.bind(styles);

type Props = {
	value: string;
};

export const Option = (props: PropsWithChildren<Props>) => {
	const { value, children } = props;

	const ctx = useContext(SelectContext);

	const handleClick = () => {
		ctx.onChange(value);
	};

	const optionClasses = cx('option', { 'option--selected': ctx.value === value });
	const buttonClasses = cx('option__button');

	return (
		<li className={optionClasses}>
			<button className={buttonClasses} onClick={handleClick}>
				{children}
			</button>
		</li>
	);
};
