import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('prices')
export class PriceEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'float' })
	value: number;

	@Column()
	currency: string;

	@Column()
	symbol: string;

	@ManyToOne(() => ProductEntity, (product) => product.price)
	product: ProductEntity;
}
