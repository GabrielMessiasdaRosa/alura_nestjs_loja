import { IsString } from 'class-validator';
import { ProductEntity } from '../product.entity';

export class ProductImagesDto {
  id: string;

  @IsString()
  url: string;

  @IsString()
  description: string;

  product: ProductEntity;
}
