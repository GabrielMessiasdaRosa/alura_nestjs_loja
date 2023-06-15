import { Column, Entity } from 'typeorm';

@Entity({ name: 'product_images' })
export class ProductImagesEntity {
  @Column({ name: 'id', primary: true, type: 'uuid' })
  id: string;

  @Column({ name: 'url', nullable: false })
  url: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;
}
