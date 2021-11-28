import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity, PriceEntity, ProductEntity } from '@vn-ecommerce/models';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: process.env.DB_PASSWORD,
			database: 'vn-ecommerce',
			autoLoadEntities: true,
			synchronize: true,
			dropSchema: true,
		}),
		TypeOrmModule.forFeature([ProductEntity, PriceEntity, CurrencyEntity]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
