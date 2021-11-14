import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Error.module.scss';
import { ReactComponent as ErrorIcon } from '../../icons/error.svg';

const cx = classNames.bind(styles);

type Props = HTMLAttributes<HTMLDivElement>;

export const Error: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { children, className, ...rest } = props;
	const errorClasses = cx('error', className);
	const iconClasses = cx('error__icon');

	return (
		<div className={errorClasses} {...rest}>
			<ErrorIcon className={iconClasses} />
			{children}
		</div>
	);
};
