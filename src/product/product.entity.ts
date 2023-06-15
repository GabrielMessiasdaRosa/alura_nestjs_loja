import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductDetailsEntity } from './product-details.entity';
import { ProductImagesEntity } from './product-images.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', unique: true, length: 50, nullable: false })
  name: string;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({ name: 'qtd', type: 'int', nullable: false })
  qtd: number;

  @Column({ name: 'description', type: 'text', nullable: false })
  description: string;

  @OneToMany(() => ProductDetailsEntity, (details) => details.product, {
    cascade: true,
    eager: true,
  })
  details: ProductDetailsEntity[];

  @OneToMany(() => ProductDetailsEntity, (image) => image.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImagesEntity[];

  @Column({ name: 'category', type: 'varchar', length: 50, nullable: false })
  category: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: string;
}
