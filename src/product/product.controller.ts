import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    try {
      const products = await this.productService.getProducts();
      return {
        data: products,
        message: 'Products retrieved successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    try {
      const product = await this.productService.getProduct(id);
      return {
        data: product,
        message: 'Product retrieved successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto) {
    try {
      const newProduct = await this.productService.createProduct(body);
      return {
        data: newProduct,
        message: 'Product created successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateProduct(@Body() body: UpdateProductDto, @Param('id') id: string) {
    try {
      const product = await this.productService.updateProduct(id, body);
      return { data: product, message: 'Product updated successfully' };
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const product = await this.productService.deleteProduct(id);
      return { data: product, message: 'Product deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  /* 
  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    return {
      statusCode: 200,
      message: 'Product retrieved successfully',
      product: product,
    };
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto) {
    const productEntity = new ProductEntity();
    productEntity.name = body.name;
    productEntity.description = body.description;
    productEntity.price = body.price;
    productEntity.id = uuid();
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
    };
  }

  @Put('/:id')
  async updateProduct(@Body() body: UpdateProductDto, @Param('id') id: string) {
    return this.productService.updateProduct(id, body);
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  } */
}
