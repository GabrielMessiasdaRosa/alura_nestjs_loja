import { IsString } from 'class-validator';

export class ProductImagesDto {
  @IsString()
  url: string;

  @IsString()
  description: string;
}
