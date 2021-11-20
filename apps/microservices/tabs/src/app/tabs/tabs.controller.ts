import { Controller, Get } from '@nestjs/common';
import { TabsService } from './tabs.service';

@Controller('tabs')
export class TabsController {
	constructor(private readonly tabsService: TabsService) {}

	@Get()
	getTabs() {
		return this.tabsService.findAll();
	}

	@Get(':id')
	getTabById(id: string) {
		return this.tabsService.findOne(id);
	}
}
