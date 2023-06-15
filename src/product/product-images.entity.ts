import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImagesEntity {
  @Column({ name: 'id', primary: true, type: 'uuid' })
  id: string;

  @Column({ name: 'url', nullable: false })
  url: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => ProductEntity, (product) => product.images)
  product: ProductEntity;
}
