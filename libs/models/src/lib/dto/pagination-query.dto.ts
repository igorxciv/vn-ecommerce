import { IsOptional, IsPositive } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQueryDto {
	@ApiPropertyOptional({ description: 'Max amount of products request should return', example: 20 })
	@IsOptional()
	@IsPositive()
	limit: number;

	@ApiPropertyOptional({ description: 'Offset of products request', example: 5 })
	@IsOptional()
	@IsPositive()
	offset: number;
}
