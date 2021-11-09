import { Logo } from '@vn-ecommerce/ui-kit/atoms/logo';
import { useTranslation } from 'react-i18next';

export const Header = () => {
	const { t } = useTranslation('common');

	return (
		<header>
			<Logo alt={`${t('logo1')} ${t('logo2')}`} />
		</header>
	);
};
