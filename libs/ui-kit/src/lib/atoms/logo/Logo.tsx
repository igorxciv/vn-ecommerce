import { Link } from 'react-router-dom'
import { FC } from 'react'

type Props = {
	to?: string
	alt: string
}

export const Logo: FC<Props> = (props: Props) => {
	const { to = '/', alt } = props

	return (
		<Link to={to}>
			<img src="https://www.gstatic.com/images/branding/product/2x/keep_48dp.png" alt={alt} />
		</Link>
	)
}
