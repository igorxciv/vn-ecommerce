import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity, PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { TabsUploadService } from './tabs-upload.service';
import { TabsUploadController } from './tabs-upload.controller';

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity, PriceEntity, CurrencyEntity])],
	controllers: [TabsUploadController],
	providers: [TabsUploadService],
})
export class TabsUploadModule {}
