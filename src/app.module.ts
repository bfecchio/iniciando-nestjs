import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // @ts-ignore
      useFactory: async (configService: ConfigService) => ({
        type: configService.get('TYPEORM_CONNECTION', 'mysql'),
        host: configService.get('TYPEORM_HOST', 'db'),
        port: configService.get<number>('TYPEORM_PORT', 3306),
        database: configService.get('TYPEORM_DATABASE', 'iniciando-nestjs'),
        username: configService.get('TYPEORM_USERNAME', 'root'),
        password: configService.get('TYPEORM_PASSWORD', 'root'),
        entities: [Category]
      }),
    }),    
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
