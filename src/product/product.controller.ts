import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Post()
    async createProduct(
        @Body() body: CreateProductDto  
    ) {
        return this.productService.createProduct(body);
    }
}
