import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private products = [];

  async createProduct(body: CreateProductDto) {
    const product = {...body, id: this.products.length + 1}
    this.products.push(product);
    return product;
  }

  async getProducts() {
    return this.products;
  }
}
