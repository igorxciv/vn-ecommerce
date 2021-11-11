import classNames from 'classnames/bind';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '@frontend/pages/home';
import { Cart } from '@frontend/pages/cart';
import { Tabs } from '@frontend/pages/tabs';
import { Courses } from '@frontend/pages/courses';
import { Analysis } from '@frontend/pages/analysis';
import { GuitarSuggest } from '@frontend/pages/guitar-recommendation';
import styles from './RoutableContent.module.scss';

const cx = classNames.bind(styles);

export const RoutableContent: FC = () => {
	const contentClasses = cx('content');

	return (
		<main className={contentClasses}>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/courses" component={Courses} />
				<Route path="/analysis" component={Analysis} />
				<Route path="/guitar-suggest" component={GuitarSuggest} />
				<Redirect to="/" />
			</Switch>
		</main>
	);
};
