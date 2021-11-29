import { Body, Controller, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from '../dto/create-currency.dto';

@Controller('currency')
export class CurrencyController {
	constructor(private readonly currencyService: CurrencyService) {}

	@Post()
	async create(@Body() body: CreateCurrencyDto) {
		return await this.currencyService.create(body);
	}
}
