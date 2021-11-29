import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyEntity, PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { CreateTabDto } from '../dto/create-tab.dto';

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
		@InjectRepository(PriceEntity) private readonly priceRepository: Repository<PriceEntity>,
		@InjectRepository(CurrencyEntity) private readonly currencyRepository: Repository<CurrencyEntity>,
	) {}

	async create(createTabDto: CreateTabDto) {
		const { artist, track, prices: pricesDto } = createTabDto;
		const prices = pricesDto.map((priceDto) => this.priceRepository.create({ ...priceDto, currency: { id: priceDto.currencyID } }));
		const product = this.productRepository.create({ name: `${artist} - ${track}`, className: 'tabs', prices });

		// const currency = await this.currencyRepository.findOne(currencyID);
		//
		// if (!currency) {
		// 	throw new NotFoundException(`Currency with ID ${currencyID} not found`);
		// }

		return await this.productRepository.save(product);
	}

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
