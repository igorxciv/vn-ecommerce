import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type Props = {
	type?: 'transparent' | 'primary';
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, className, type = 'primary', ...rest } = props;

	const buttonClasses = cx('button', { 'button--transparent': type === 'transparent' }, className);

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	);
};
