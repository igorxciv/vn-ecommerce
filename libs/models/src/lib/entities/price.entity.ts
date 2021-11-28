import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CurrencyEntity } from './currency.entity';

@Entity('prices')
export class PriceEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'float' })
	value: number;

	@Column()
	symbol: string;

	@ManyToOne(() => ProductEntity, (product) => product.price)
	product: ProductEntity;

	@ManyToOne(() => CurrencyEntity, (currency) => currency.id)
	currency: PriceEntity;
}
