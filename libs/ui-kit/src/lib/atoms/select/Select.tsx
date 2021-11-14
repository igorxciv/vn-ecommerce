import { PropsWithChildren, useState, useRef, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Transition } from 'react-transition-group';
import { TransitionDuration } from '@vn-ecommerce/ui-kit/design/constants';
import { useClickOutside } from '@vn-ecommerce/ui-kit/utils/interaction';
import { SelectContext } from './select-context';
import styles from './Select.module.scss';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

const cx = classNames.bind(styles);

type Props = {
	onChange: (value: string) => void;
	value: string;
	label?: ReactNode;
};

export const Select = (props: PropsWithChildren<Props>) => {
	const { value, children, label = '', onChange } = props;

	const [opened, setOpened] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const handleSelect = (value: string) => {
		onChange(value);
		setOpened(false);
	};

	const handleToggle = () => {
		setOpened(!opened);
	};

	useClickOutside(selectRef, () => setOpened(false));

	const buttonClasses = cx('select__button');
	const chevronClasses = cx('select__chevron', { 'select__chevron--opened': opened });
	const listClasses = cx('select__list');

	const items = (
		<Transition nodeRef={listRef} in={opened} timeout={{ exit: TransitionDuration.SelectAppear }} mountOnEnter unmountOnExit>
			{(state) => (
				<ul ref={listRef} className={cx(listClasses, { 'select__list--exiting': state === 'exiting' })}>
					{children}
				</ul>
			)}
		</Transition>
	);

	return (
		<SelectContext.Provider value={{ value, onChange: handleSelect }}>
			<div ref={selectRef}>
				<button className={buttonClasses} onClick={handleToggle}>
					<span>{label}</span>
					<ChevronIcon className={chevronClasses} />
				</button>
				{items}
			</div>
		</SelectContext.Provider>
	);
};
