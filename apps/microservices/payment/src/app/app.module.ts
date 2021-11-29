import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyModule } from './currency';

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
		CurrencyModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
