import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Hamburger.module.scss';

const cx = classNames.bind(styles);

export const Hamburger: FC = () => {
	const hamburgerClasses = cx('hamburger');
	const hamburgerLineClasses = cx('hamburger__line');

	return (
		<button className={hamburgerClasses}>
			<div className={hamburgerLineClasses} />
			<div className={hamburgerLineClasses} />
		</button>
	);
};
