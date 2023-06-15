import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_details' })
export class ProductDetailsEntity {
  @Column({ name: 'id', primary: true, type: 'uuid' })
  id: string;

  @Column({ name: 'name', length: 50, nullable: false })
  name: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => ProductEntity, (product) => product.details)
  product: ProductEntity;
}
