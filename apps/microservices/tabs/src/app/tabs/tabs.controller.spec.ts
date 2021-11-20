import { Test, TestingModule } from '@nestjs/testing';
import { TabsController } from './tabs.controller';
import { TabsService } from './tabs.service';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [TabsController],
			providers: [TabsService],
		}).compile();
	});

	describe('getData', () => {
		it('should return "Welcome to tabs!"', () => {
			const tabsController = app.get<TabsController>(TabsController);

			expect(tabsController.getTabs()).toEqual({ message: 'Welcome to tabs!' });
		});
	});
});
