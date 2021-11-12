import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './DropdownButton.module.scss';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

type Props = {
	expanded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const cx = classNames.bind(styles);

export const DropdownButton: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
	const { expanded = false, className, children, ...restProps } = props;

	const buttonClasses = cx('button', { 'button--expanded': expanded }, className);
	const iconClasses = cx('button__icon', { 'button__icon--expanded': expanded });

	return (
		<button className={buttonClasses} {...restProps}>
			{children}
			<ChevronIcon className={iconClasses} />
		</button>
	);
};
