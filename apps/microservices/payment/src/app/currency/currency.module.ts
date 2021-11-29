import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity, PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity, PriceEntity, CurrencyEntity])],
	controllers: [CurrencyController],
	providers: [CurrencyService],
})
export class CurrencyModule {}
