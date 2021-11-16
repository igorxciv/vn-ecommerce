import { Product } from '@vn-ecommerce/ui-kit/types/product';
import { Tab } from '@frontend/api/tabs/types';

export function castTabToProduct(tab: Tab): Product {
	const { id, image, artist, track } = tab;

	return {
		id,
		imageName: image,
		name: `${artist} - ${track}`,
		price: 100,
	};
}
