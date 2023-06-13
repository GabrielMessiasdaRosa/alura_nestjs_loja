import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    price: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string;
}