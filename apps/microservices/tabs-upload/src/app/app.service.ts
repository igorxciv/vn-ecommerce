import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { CreateTabDto } from '../dto/create-tab.dto';

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
		@InjectRepository(PriceEntity) private readonly price: Repository<PriceEntity>,
	) {}

	async create(createTabDto: CreateTabDto) {
		const { artist, track } = createTabDto;
		const tab = this.productRepository.create({ name: `${artist} - ${track}`, className: 'tabs' });

		return await this.productRepository.save(tab);
	}

	private preloadPrice(value: number, currency = 'USD') {}

	// async update(id: string, updateTabDto: UpdateTabDto) {
	// 	const tab = await this.tabRepository.preload({ id, ...updateTabDto, updatedAt: new Date() });
	//
	// 	if (!tab) {
	// 		throw new NotFoundException(`Tab ${id} not found`);
	// 	}
	//
	// 	return await this.tabRepository.save(tab);
	// }

	// async remove(id: string) {
	// 	const tab = await this.tabRepository.findOne(id);
	//
	// 	if (!tab) {
	// 		throw new NotFoundException(`Tab ${id} not found`);
	// 	}
	//
	// 	return this.tabRepository.remove(tab);
	// }
}
