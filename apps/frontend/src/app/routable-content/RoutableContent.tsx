import classNames from 'classnames/bind';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './RoutableContent.module.scss';
import { Home } from '../../pages/home';
import { Cart } from '../../pages/cart';

const cx = classNames.bind(styles);

export const RoutableContent: FC = () => {
	const contentClasses = cx('content');

	return (
		<main className={contentClasses}>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} />
				<Redirect to="/" />
			</Switch>
		</main>
	);
};
