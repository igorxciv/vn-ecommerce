import { IsNumber, IsString } from 'class-validator';

export class CreateTabDto {
	@IsString()
	artist: string;

	@IsString()
	track: string;

	@IsNumber()
	complexity: number;

	@IsString()
	image: string;
}
