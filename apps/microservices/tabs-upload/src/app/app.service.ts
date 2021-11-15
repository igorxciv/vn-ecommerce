import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tab } from '../entities/tab.entity';
import { CreateTabDto } from '../dto/create-tab.dto';
import { UpdateTabDto } from '../dto/update-tab.dto';

@Injectable()
export class AppService {
	constructor(@InjectRepository(Tab) private readonly tabRepository: Repository<Tab>) {}

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
