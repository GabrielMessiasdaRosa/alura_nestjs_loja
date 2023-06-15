import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { ProductDetailsDto } from './product-details.dto';
import { ProductImagesDto } from './product-images.dto';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  qtd: number;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductDetailsDto)
  details: ProductDetailsDto[];

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImagesDto)
  images: ProductImagesDto[];

  @IsString()
  @IsNotEmpty()
  category: string;
}
