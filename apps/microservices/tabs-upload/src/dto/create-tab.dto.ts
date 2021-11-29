import { IsArray, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TabPriceDto {
	@IsNumber()
	value: number;

	@IsUUID()
	currencyID: string;
}

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

	@ValidateNested({ each: true })
	@Type(() => TabPriceDto)
	@IsArray()
	prices: TabPriceDto[];
}
