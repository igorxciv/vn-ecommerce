import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabEntity } from '@vn-ecommerce/models';
import { TabsController } from './tabs.controller';
import { TabsService } from './tabs.service';

@Module({
	imports: [TypeOrmModule.forFeature([TabEntity])],
	controllers: [TabsController],
	providers: [TabsService],
})
export class TabsModule {}
