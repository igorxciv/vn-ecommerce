import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTabDto } from '../dto/create-tab.dto';

@Controller('tabs')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post()
	uploadTab(@Body() body: CreateTabDto) {
		return this.appService.create(body);
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
