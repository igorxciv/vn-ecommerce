import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(private readonly tabsService: ProductsService) {}

	@Get()
	getProducts() {
		return this.tabsService.findAll();
	}

	@Get(':id')
	getProductById(id: string) {
		return this.tabsService.findOne(id);
	}
}
