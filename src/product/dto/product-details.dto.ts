import { IsString } from 'class-validator';
import { ProductEntity } from '../product.entity';

export class ProductDetailsDto {

  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  product: ProductEntity;
}
