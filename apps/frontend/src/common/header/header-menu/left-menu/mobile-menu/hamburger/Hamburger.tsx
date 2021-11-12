import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Hamburger.module.scss';

const cx = classNames.bind(styles);

type Props = {
	onClick: () => void;
};

export const Hamburger: FC<Props> = (props: Props) => {
	const { onClick } = props;
	const hamburgerClasses = cx('hamburger');
	const hamburgerLineClasses = cx('hamburger__line');

	return (
		<button className={hamburgerClasses} onClick={onClick}>
			<div className={hamburgerLineClasses} />
			<div className={hamburgerLineClasses} />
		</button>
	);
};
