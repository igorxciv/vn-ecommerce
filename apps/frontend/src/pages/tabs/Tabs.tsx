import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import { Error } from '@vn-ecommerce/ui-kit/atoms/error';
import { ProductsList } from '@vn-ecommerce/ui-kit/organisms/products-list';
import { castTabToProduct } from '@frontend/utils/product';
import { Product } from '@vn-ecommerce/ui-kit/types/product';
import { useTabs } from './hooks';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

export const Tabs: FC = () => {
	const { t } = useTranslation('navigation');
	const { t: tt } = useTranslation('tabs');
	const { tabs, error } = useTabs();

	const tabsClasses = cx('tabs');
	const titleClasses = cx('tabs__title');

	const products = tabs.map((tab) => castTabToProduct(tab));

	const handleAddToCart = (product: Product) => {
		console.log(product);
	};

	const tabsList = error ? (
		<Error>{error}</Error>
	) : (
		<ProductsList products={products} path="/tabs" quickshopLabel={tt('quickshop')} onAddToCart={handleAddToCart} />
	);

	return (
		<section className={tabsClasses}>
			<h1 className={titleClasses}>{t('tabs')}</h1>
			{tabsList}
		</section>
	);
};
