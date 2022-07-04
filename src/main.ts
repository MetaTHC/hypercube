import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
require('dotenv').config({ path: '.env' });
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupSwagger } from './config/swagger/swagger.controller';
// import { accountSwagger, socialSwagger } from './config/swagger';
async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appOptions,
  );
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (): BadRequestException =>
        new BadRequestException('Validation error'),
    }),
  );
  // SWAGGER CONFIG CALLS
  setupSwagger(app);
  // accountSwagger(app);
  // socialSwagger(app);

  const port = process.env.PORT || 6060;
  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/`);
}
bootstrap();
