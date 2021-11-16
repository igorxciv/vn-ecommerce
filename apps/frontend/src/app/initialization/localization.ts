import i18next from 'i18next';
import common_ru from '../../translations/ru/common.json';
import common_en from '../../translations/en/common.json';
import navigation_ru from '../../translations/ru/navigation.json';
import navigation_en from '../../translations/en/navigation.json';
import products_ru from '../../translations/ru/products.json';
import products_en from '../../translations/en/products.json';

export async function setupLocalization(): Promise<void> {
	await i18next.init({
		interpolation: { escapeValue: false },
		lng: 'en',

		resources: {
			en: {
				common: common_en,
				navigation: navigation_en,
				products: products_en,
			},
			ru: {
				common: common_ru,
				navigation: navigation_ru,
				products: products_ru,
			},
		},
	});
}
