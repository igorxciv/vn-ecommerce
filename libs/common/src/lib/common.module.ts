import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UserGuard } from './guards';

@Module({
	controllers: [],
	providers: [{ provide: APP_GUARD, useClass: UserGuard }],
	exports: [],
})
export class CommonModule {}
