import { FC } from 'react';
import { ProductTile } from '@vn-ecommerce/ui-kit/molecules/product-tile';
import { Product } from '@vn-ecommerce/ui-kit/types/product';
import classNames from 'classnames/bind';
import styles from './ProductsList.module.scss';

const cx = classNames.bind(styles);

type Props = {
	products: Product[];
	onAddToCart: (product: Product) => void;
	path: string;
	quickshopLabel: string;
};

export const ProductsList: FC<Props> = (props: Props) => {
	const { products, path, quickshopLabel, onAddToCart } = props;

	const listClasses = cx('products-list');

	const productsItems = products.map((p) => (
		<ProductTile key={p.id} product={p} url={`${path}/${p.id}`} quickshopLabel={quickshopLabel} onAddToCart={onAddToCart} />
	));

	return <ul className={listClasses}>{productsItems}</ul>;
};
