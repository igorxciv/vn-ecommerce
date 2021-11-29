import { Controller, Get, Query } from '@nestjs/common';
import { PaginationQueryDto } from '@vn-ecommerce/models';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private readonly tabsService: ProductsService) {}

	@Get()
	getProducts(@Query() paginationQuery: PaginationQueryDto) {
		return this.tabsService.findAll(paginationQuery);
	}

	@Get(':id')
	getProductById(id: string) {
		return this.tabsService.findOne(id);
	}
}
