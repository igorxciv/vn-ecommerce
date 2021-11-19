import { FC, PropsWithChildren, useState } from 'react';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import styles from './Accordion.module.scss';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

const cx = classNames.bind(styles);

type Props = {
	label: string;
	isOpen?: boolean;
};

export const Accordion: FC<Props> = (props: PropsWithChildren<Props>) => {
	const { isOpen, label, children } = props;
	const [opened, setOpened] = useState(isOpen);

	const handleClick = () => {
		setOpened(!opened);
	};

	const accordionClasses = cx('accordion');
	const buttonClasses = cx('accordion__button');
	const iconClasses = cx('accordion__icon');
	const contentClasses = cx('accordion__content');

	return (
		<div className={accordionClasses}>
			<button className={buttonClasses} onClick={handleClick}>
				{label}
				<ChevronIcon className={iconClasses} />
			</button>
			<Transition in={opened} mountOnEnter unmountOnExit timeout={{ exit: 1000 }}>
				{(state) => <div className={cx(contentClasses, `accordion__content--${state}`)}>{children}</div>}
			</Transition>
		</div>
	);
};
