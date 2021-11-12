import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './DropdownButton.module.scss';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

type Props = {
	label?: string;
	expanded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const cx = classNames.bind(styles);

export const DropdownButton: FC<Props> = (props: Props) => {
	const { label = '', expanded = false, className, ...restProps } = props;

	const buttonClasses = cx('button', { 'button--expanded': expanded }, className);
	const textClasses = cx('button__text');
	const iconClasses = cx('button__icon', { 'button__icon--expanded': expanded });

	return (
		<button className={buttonClasses} {...restProps}>
			<span className={textClasses}>{label}</span>
			<ChevronIcon className={iconClasses} />
		</button>
	);
};
