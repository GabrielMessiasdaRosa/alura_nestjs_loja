import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserService } from '../user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqEmailValidator implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailAlreadyExists = await this.userService.emailAlreadyExists(value);
    return !emailAlreadyExists;
  }
}

export const UniqEmail = (validationOptions?: any) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqEmailValidator,
    });
  };
};
