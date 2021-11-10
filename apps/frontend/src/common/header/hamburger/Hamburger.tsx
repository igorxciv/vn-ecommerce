import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Hamburger.module.scss';

const cx = classNames.bind(styles);

type Props = HTMLAttributes<HTMLButtonElement>;

export const Hamburger: FC<Props> = (props: Props) => {
	const { className, ...rest } = props;
	const hamburgerClasses = cx('hamburger', className);
	const hamburgerLineClasses = cx('hamburger__line');

	return (
		<button className={hamburgerClasses} {...rest}>
			<div className={hamburgerLineClasses} />
			<div className={hamburgerLineClasses} />
		</button>
	);
};
