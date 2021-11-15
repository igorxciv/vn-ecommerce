import { Body, Controller, Delete, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTabDto } from '../dto/create-tab.dto';
import { UpdateTabDto } from '../dto/update-tab.dto';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post('tabs')
	uploadTab(@Body() body: CreateTabDto) {
		return this.appService.create(body);
	}

	@Patch('tabs/:uuid')
	updateTab(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateTabDto) {
		return this.appService.update(id, body);
	}

	@Delete('tabs/:uuid')
	deleteTab(@Param('uuid', ParseUUIDPipe) id: string) {
		return this.appService.remove(id);
	}
}
