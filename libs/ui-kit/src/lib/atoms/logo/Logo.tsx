import { Link } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

const cx = classNames.bind(styles);

type Props = {
	to?: string;
	firstCaption?: string;
	secondCaption?: string;
};

export const Logo: FC<Props> = (props: Props) => {
	const { to = '/', firstCaption = '', secondCaption = '' } = props;
	const logoClasses = cx('logo');
	const iconClasses = cx('logo__icon');
	const captionClasses = cx('logo__caption');

	return (
		<Link to={to} className={logoClasses}>
			<span className={captionClasses}>{firstCaption}</span>
			<LogoIcon className={iconClasses} />
			<span className={captionClasses}>{secondCaption}</span>
		</Link>
	);
};
