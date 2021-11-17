import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@vn-ecommerce/ui-kit/atoms/image/Image';
import { ProductBreakpoints } from '@vn-ecommerce/ui-kit/design/constants';
import classNames from 'classnames/bind';
import styles from './ProductTile.module.scss';
import { Product } from '../../types/product';

const cx = classNames.bind(styles);

type Props = {
	product: Product;
	url: string;
	onAddToCart: (product: Product) => void;
	quickshopLabel: string;
};

export const ProductTile: FC<Props> = (props: Props) => {
	const { product, onAddToCart, url, quickshopLabel } = props;
	const { name, price, imageName } = product;

	const tileClasses = cx('product-tile');
	const linkClasses = cx('product-tile__link');
	const slideClasses = cx('product-tile__slide');
	const quickshopClasses = cx('product-tile__quickshop');
	const imageClasses = cx('product-tile__image');
	const nameClasses = cx('product-tile__name');
	const priceClasses = cx('product-tile__price');

	const handleQuickshopClick = () => {
		onAddToCart(product);
	};

	return (
		<div className={tileClasses}>
			<Link to={url} className={linkClasses}>
				<div className={slideClasses}>
					<Image
						name={imageName}
						breakpoints={{ s: ProductBreakpoints.Small, m: ProductBreakpoints.Medium, l: ProductBreakpoints.Large }}
						className={imageClasses}
					/>
					<button className={quickshopClasses} onClick={handleQuickshopClick}>
						{quickshopLabel}
					</button>
				</div>
				<div className={nameClasses}>{name}</div>
				<div className={priceClasses}>${price}</div>
			</Link>
		</div>
	);
};
