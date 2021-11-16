import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('tabs')
	async getTabs() {
		return await this.appService.findAll();
	}

	@Get('tabs/:id')
	async getTabById(@Param('id') id: string) {
		return await this.appService.findOne(id);
	}
}
