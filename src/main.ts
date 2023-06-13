import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(  // 👈 useGlobalPipes method is used to enable global validation pipes
  new ValidationPipe({
    transform: true, // 👈 transform option is used to automatically transform payloads to DTO instances
    whitelist: true, // 👈 whitelist option is used to strip any properties that do not have any decorators
    forbidNonWhitelisted: true, // 👈 forbidNonWhitelisted option is used to throw an error if any properties that do not have any decorators are present
  }
  ));
  await app.listen(8080);
}
bootstrap();
