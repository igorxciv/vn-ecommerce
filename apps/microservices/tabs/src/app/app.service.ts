import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getTabs(): unknown[] {
		return [];
	}

	getTabById(id: string): unknown {
		return {
			id,
		};
	}
}
