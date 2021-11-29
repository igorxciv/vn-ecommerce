import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from '@vn-ecommerce/models';
import { Repository } from 'typeorm';

@Injectable()
export class CurrenciesValidator {
	constructor(@InjectRepository(CurrencyEntity) private readonly currencyRepository: Repository<CurrencyEntity>) {}

	async checkCurrenciesExist(...currenciesID: string[]): Promise<boolean> {
		const currencies = await this.currencyRepository.findByIds(currenciesID);

		return currencies.length === currenciesID.length;
	}
}
