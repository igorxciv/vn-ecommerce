import { Link } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

const cx = classNames.bind(styles);

type Props = {
	to?: string;
};

export const Logo: FC<Props> = (props: Props) => {
	const { to = '/' } = props;
	const logoClasses = cx('logo');
	const iconClasses = cx('logo__icon');

	return (
		<Link to={to} className={logoClasses}>
			<LogoIcon className={iconClasses} />
		</Link>
	);
};
