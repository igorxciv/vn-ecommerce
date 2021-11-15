import { Injectable, NotFoundException } from '@nestjs/common';
import { TabEntity } from '@vn-ecommerce/models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
	constructor(@InjectRepository(TabEntity) private readonly tabRepository: Repository<TabEntity>) {}

	async findAll(): Promise<TabEntity[]> {
		return await this.tabRepository.find();
	}

	async findOne(id: string): Promise<TabEntity> {
		const tab = await this.tabRepository.findOne(id);

		if (!tab) {
			throw new NotFoundException(`Tab #${id} not found`);
		}

		return tab;
	}
}
