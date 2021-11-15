import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabEntity } from '@vn-ecommerce/models';
import { CreateTabDto } from '../dto/create-tab.dto';
import { UpdateTabDto } from '../dto/update-tab.dto';

@Injectable()
export class AppService {
	constructor(@InjectRepository(TabEntity) private readonly tabRepository: Repository<TabEntity>) {}

	async create(createTabDto: CreateTabDto) {
		const tab = this.tabRepository.create(createTabDto);

		return await this.tabRepository.save(tab);
	}

	async update(id: string, updateTabDto: UpdateTabDto) {
		const tab = await this.tabRepository.preload({ id, ...updateTabDto });

		if (!tab) {
			throw new NotFoundException(`Tab ${id} not found`);
		}

		return await this.tabRepository.save(tab);
	}

	async remove(id: string) {
		const tab = await this.tabRepository.findOne(id);

		if (!tab) {
			throw new NotFoundException(`Tab ${id} not found`);
		}

		return this.tabRepository.remove(tab);
	}
}
