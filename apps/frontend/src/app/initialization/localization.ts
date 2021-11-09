import i18next from 'i18next';
import common_ru from '../../translations/ru/common.json';
import common_en from '../../translations/en/common.json';

export async function setupLocalization(): Promise<void> {
	await i18next.init({
		interpolation: { escapeValue: false },
		lng: 'en',
		resources: {
			en: {
				common: common_en,
			},
			ru: {
				common: common_ru,
			},
		},
	});
}
