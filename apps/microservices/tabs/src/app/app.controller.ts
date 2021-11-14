import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('tabs')
	getTabs() {
		return this.appService.getTabs();
	}

	@Get('tabs/:id')
	getTabById(@Param('id') id: string) {
		return this.appService.getTabById(id);
	}
}
