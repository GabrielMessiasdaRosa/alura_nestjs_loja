import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';
import { v4 as uuid } from 'uuid';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  async getProduct(
      @Param('id') id: string
  ) {
      const product = await this.productService.getProduct(id);
      return {
          statusCode: 200,
          message: 'Product retrieved successfully',
          product: product
      }
  }

  @Post()
    async createProduct(
        @Body() body: CreateProductDto  
    ) {
      const productEntity = new ProductEntity();
      productEntity.name = body.name;
      productEntity.description = body.description;
      productEntity.price = body.price;
      productEntity.id =  uuid();
      productEntity.qtd = body.qtd;
      productEntity.details = body.details;
      productEntity.images = body.images;
      productEntity.category = body.category;
      productEntity.createdAt = new Date().toISOString();
      productEntity.updatedAt = new Date().toISOString();
      this.productService.createProduct(productEntity);
      return {
          product: productEntity,
          message: 'Product created successfully',
      }

    }

    @Put('/:id')
    async updateProduct(
        @Body() body: UpdateProductDto,
        @Param('id') id: string
    ) {
        return this.productService.updateProduct(id, body);
    }

    @Delete('/:id')
    async deleteProduct(
        @Param('id') id: string
    ) {
        return this.productService.deleteProduct(id);
    }
}
