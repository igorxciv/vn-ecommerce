import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity, PriceEntity])],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductsModule {}
