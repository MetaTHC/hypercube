import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerController } from './config/swagger/swagger.controller';
import { ormConfig } from './orm.config';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './security/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['./env/.env.development', './env/.env.local'],
    }),
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, SwaggerController],
  providers: [AppService],
})
export class AppModule {}
