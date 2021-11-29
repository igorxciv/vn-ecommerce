import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from '@vn-ecommerce/models';
import { Repository } from 'typeorm';
import { CreateCurrencyDto } from '../dto/create-currency.dto';

@Injectable()
export class CurrencyService {
	constructor(@InjectRepository(CurrencyEntity) private readonly currencyRepository: Repository<CurrencyEntity>) {}

	async create(currencyDto: CreateCurrencyDto): Promise<CurrencyEntity> {
		const currency = this.currencyRepository.create(currencyDto);

		const existingCurrency = await this.currencyRepository.findOne({ code: currency.code });

		if (existingCurrency) {
			throw new HttpException('Currency already exists', HttpStatus.CONFLICT);
		}

		return await this.currencyRepository.save(currency);
	}
}
