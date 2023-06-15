import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    ConfigModule.forRoot({ // 👈 ConfigModule.forRoot() is a method that allows us to register the configuration file.
      isGlobal: true, // 👈 isGlobal is a boolean that defines whether the configuration file should be available globally.
    }),
    TypeOrmModule.forRootAsync({ // 👈 TypeOrmModule.forRootAsync() is a method that allows us to register a dynamic configuration file.
      useClass: PostgresConfigService, // 👈 useClass is a property that defines the class that implements TypeOrmOptionsFactory.
      inject: [PostgresConfigService], // 👈 inject is a property that defines the dependencies that should be injected into the class that implements TypeOrmOptionsFactory.
    }),
  ],
})
export class AppModule {}
