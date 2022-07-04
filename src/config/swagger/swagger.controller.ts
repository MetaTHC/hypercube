import { Controller, INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Controller('/swagger')
export class SwaggerController {
  // ########## SWAGGER DEFAULT
  'meta.default.default-include-pattern' = '/api/.*';
  'meta.default.title' = 'Meta³Network API';
  'meta.default.description' = 'Welcome to the Meta³Network API documentation.';
  'meta.default.version' = '0.0.1';
  'meta.default.path' = '/swagger';
  public get(key: string): any {
    return this[key];
  }
}

const swagger = new SwaggerController();
export { swagger };

export function setupSwagger(app: INestApplication): any {
  const logger: Logger = new Logger('Swagger');
  const swaggerEndpoint = swagger.get('meta.default.path');

  const options = new DocumentBuilder()
    .setTitle(swagger.get('meta.default.title'))
    .setDescription(swagger.get('meta.default.description'))
    .setVersion(swagger.get('meta.default.version'))
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerEndpoint, app, document);
  logger.log(`-----+ SWAGGER ENDPOINTS +-----`);
  logger.log(`--+ Loaded | http://localhost:6060${swaggerEndpoint}`);
}
