import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PriceEntity } from '@vn-ecommerce/models';

@Entity('currencies')
export class CurrencyEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	symbol: string;

	@OneToMany(() => PriceEntity, (price) => price.currency)
	price: PriceEntity;
}
