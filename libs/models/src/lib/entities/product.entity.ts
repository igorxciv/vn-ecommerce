import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PriceEntity } from '@vn-ecommerce/models';

@Entity('products')
export class ProductEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ default: false })
	comingSoon: boolean;

	@Column()
	name: string;

	@Column()
	className: string;

	@Column({ update: false, default: new Date() })
	createdAt: Date;

	@Column({ default: new Date() })
	updatedAt: Date;

	@OneToMany(() => PriceEntity, (price) => price.product, { cascade: true })
	prices: PriceEntity[];
}
