import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDto, ProductEntity } from '@vn-ecommerce/models';

@Injectable()
export class ProductsService {
	constructor(@InjectRepository(ProductEntity) private readonly tabRepository: Repository<ProductEntity>) {}

	async findAll(paginationQuery: PaginationQueryDto): Promise<ProductEntity[]> {
		const { offset, limit } = paginationQuery;

		return await this.tabRepository.find({ relations: ['prices'], skip: offset, take: limit });
	}

	async findOne(id: string): Promise<ProductEntity> {
		const tab = await this.tabRepository.findOne(id);

		if (!tab) {
			throw new NotFoundException(`Product #${id} not found`);
		}

		return tab;
	}
}
