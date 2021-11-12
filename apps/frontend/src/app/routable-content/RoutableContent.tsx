import classNames from 'classnames/bind';
import { FC, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '@frontend/pages/home';
import { Cart } from '@frontend/pages/cart';
import { Tabs } from '@frontend/pages/tabs';
import { Courses } from '@frontend/pages/courses';
import { Analysis } from '@frontend/pages/analysis';
import { Guitars } from '@frontend/pages/guitars';
import { useAppDispatch } from '@frontend/store/hooks';
import { setLocaleAsync } from '@frontend/store/i18n';
import { Account } from '@frontend/pages/account';
import styles from './RoutableContent.module.scss';

const cx = classNames.bind(styles);

export const RoutableContent: FC = () => {
	const contentClasses = cx('content');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLocaleAsync('ru'));
	}, [dispatch]);

	return (
		<main className={contentClasses}>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/courses" component={Courses} />
				<Route path="/analysis" component={Analysis} />
				<Route path="/guitar-suggest" component={Guitars} />
				<Route path="/account" component={Account} />
				<Redirect to="/" />
			</Switch>
		</main>
	);
};
