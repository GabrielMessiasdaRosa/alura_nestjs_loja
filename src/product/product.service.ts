import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: CreateProductDto): Promise<CreateProductDto> {
    await this.productRepository.save(product);
    return product;
  }

  async getProducts(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async getProduct(id: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProduct(id: string, body: Partial<UpdateProductDto>) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.update(id, body);
    return product;
  }

  async deleteProduct(id: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.remove(product);
    return product;
  }

  /*  private products: ProductEntity[] = [];

  async createProduct(product: ProductEntity) {
    this.products.push(product);
    return product;
  }

  async getProducts() {
    return this.products;
  }

  async updateProduct(id: string, body: Partial<CreateProductDto>) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    this.products[productIndex] = { ...this.products[productIndex], ...body };
    return this.products[productIndex];
  }

  async deleteProduct(id: string) {
    return (this.products = this.products.filter(
      (product) => product.id !== id,
    ));
  }

  async getProduct(id: string) {
    const product = this.products.find((product) => product.id === id);
    return product;
  } */
}
