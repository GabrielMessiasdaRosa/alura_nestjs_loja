import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable() // 👈 this is required
export class PostgresConfigService implements TypeOrmOptionsFactory { // 👈 TypeOrmOptionsFactory is an interface that defines a method for creating TypeOrmModuleOptions.
  constructor(private configService: ConfigService) {} // 👈 ConfigService is a service provided by the @nestjs/config package that allows us to access environment variables.

  createTypeOrmOptions(): TypeOrmModuleOptions { // 👈 createTypeOrmOptions() is a method that returns TypeOrmModuleOptions.
    return {
      type: 'postgres', // 👈 type is the type of the database.
      host: this.configService.get<string>('DB_HOST'), // 👈 host is the host of the database.
      port: this.configService.get<number>('DB_PORT'), // 👈 port is the port of the database.
      username: this.configService.get<string>('DB_USERNAME'), // 👈 username is the username of the database.
      password: this.configService.get<string>('DB_PASSWORD'), // 👈 password is the password of the database.
      database: this.configService.get<string>('DB_NAME'), // 👈 database is the name of the database.
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 👈 entities is an array of entities that are used by the database.
      synchronize: true, // 👈 synchronize is a boolean that defines whether the database schema should be auto-generated based on the entities. This should be set to false in production.
    };
  }
}
