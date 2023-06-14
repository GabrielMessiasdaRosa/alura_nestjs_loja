import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UniqEmail } from '../validation/uniq-email.validator';

export class UpdateUserDto {
  // 👈 CreateUserDto class is a class that represents the data transfer object for creating a user.

  @IsString() // 👈 IsString decorator is a class decorator that defines a validation rule that the value must be a string.
  @IsNotEmpty() // 👈 IsNotEmpty decorator is a class decorator that defines a validation rule that the value must not be empty.
  @IsOptional()
  name: string;

  @IsEmail() // 👈 IsEmail decorator is a class decorator that defines a validation rule that the value must be an email.
  @UniqEmail({ message: 'Email $value already exists. Choose another email.' })
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(8) // 👈 MinLength decorator is a class decorator that defines a validation rule that the value must be at least 8 characters long.
  @IsOptional()
  password: string;
}
