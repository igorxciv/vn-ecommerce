import { FC, HTMLAttributes } from 'react';
import { generateImageUrls } from '@vn-ecommerce/ui-kit/utils/image';

type Props = {
	alt?: string;
	name: string;
	breakpoints: {
		s: number;
		m?: number;
		l?: number;
	};
	ratio?: string;
	ext?: string;
	staticHost?: string;
} & HTMLAttributes<HTMLImageElement>;

export const Image: FC<Props> = (props: Props) => {
	const {
		alt = 'unknown image',
		breakpoints: { s, m, l },
		ext = 'jpeg',
		ratio = '22/25',
		name,
		staticHost = '',
		className,
	} = props;
	const { s: sName, m: mName, l: lName } = generateImageUrls(name, { s, m, l }, ratio, ext);

	const smallSource = s && <source srcSet={`${staticHost}/${sName}`} />;
	const mediumSource = m && <source srcSet={`${staticHost}/${mName}`} />;
	const largeSource = l && <source srcSet={`${staticHost}/${lName}`} />;

	return (
		<figure>
			<picture>
				{largeSource}
				{mediumSource}
				{smallSource}
				<img alt={alt} src={`${staticHost}/${sName}`} className={className} />
			</picture>
		</figure>
	);
};
