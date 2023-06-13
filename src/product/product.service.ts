import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  private products = [];

  async createProduct(product: ProductEntity) {
    this.products.push(product);
    return product;
  }

  async getProducts() {
    return this.products;
  }

  async updateProduct(id: string, body: Partial<CreateProductDto>) {
    const productIndex = this.products.findIndex(product => product.id === id);
    this.products[productIndex] = {...this.products[productIndex], ...body};
    return this.products[productIndex];
  }

  async deleteProduct(id: string) {
    return this.products = this.products.filter(product => product.id !== id);
  }

  async getProduct(id: string) {
    const product = this.products.find(product => product.id === id);
    return product;
  }
}
