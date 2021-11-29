import { Body, Controller, Post } from '@nestjs/common';
import { TabsUploadService } from './tabs-upload.service';
import { CreateTabDto } from '../dto/create-tab.dto';

@Controller('tabs')
export class TabsUploadController {
	constructor(private readonly tabsUploadService: TabsUploadService) {}

	@Post()
	uploadTab(@Body() body: CreateTabDto) {
		return this.tabsUploadService.create(body);
	}

	// @Patch(':uuid')
	// updateTab(@Param('uuid') id: string, @Body() body: UpdateTabDto) {
	// 	return this.appService.update(id, body);
	// }
	//
	// @Delete(':uuid')
	// deleteTab(@Param('uuid') id: string) {
	// 	return this.appService.remove(id);
	// }
}
