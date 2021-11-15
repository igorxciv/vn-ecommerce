import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTabDto {
	@IsString()
	artist: string;

	@IsString()
	track: string;

	@IsNumber()
	complexity: number;

	@IsString()
	@IsOptional()
	image?: string;
}
