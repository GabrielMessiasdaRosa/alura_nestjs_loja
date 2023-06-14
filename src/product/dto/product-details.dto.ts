import { IsString } from 'class-validator';

export class ProductDetailsDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
