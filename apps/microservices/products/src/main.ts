/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter, TimeoutInterceptor } from '@vn-ecommerce/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = 'api/v1';

	app.setGlobalPrefix(globalPrefix);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			transformOptions: { enableImplicitConversion: true },
		}),
	);
	app.enableCors();
	app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalInterceptors(new TimeoutInterceptor());
	const port = process.env.PORT || 8083;

	await app.listen(port, () => {
		Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
	});
}

bootstrap();
