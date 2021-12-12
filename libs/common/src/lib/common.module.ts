import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserGuard } from './guards';
import { LoggingMiddleware } from './middlewares';

@Module({
	controllers: [],
	providers: [{ provide: APP_GUARD, useClass: UserGuard }],
	exports: [],
})
export class CommonModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggingMiddleware).forRoutes('*');
	}
}
