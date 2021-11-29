import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CurrenciesValidator } from './validators';
import { TabsUploadModule } from './tabs-upload';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'postgres',
				host: process.env.DATABASE_HOST,
				port: +process.env.DATABASE_PORT,
				username: process.env.DATABASE_USER,
				password: process.env.DATABASE_PASSWORD,
				database: process.env.DATABASE_NAME,
				autoLoadEntities: true,
				synchronize: true,
				dropSchema: true,
			}),
		}),
		TabsUploadModule,
	],
	providers: [CurrenciesValidator],
})
export class AppModule {}
