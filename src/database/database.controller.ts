import { Controller } from '@nestjs/common';

@Controller('database')
export class DatabaseController {
  'meta.database.type' = process.env.DATABASE_TYPE;
  'meta.database.host' = process.env.DATABASE_HOST;
  'meta.database.port' = process.env.DATABASE_PORT;
  'meta.database.username' = process.env.DATABASE_USERNAME;
  'meta.database.password' = process.env.DATABASE_PASSWORD;
  'meta.database.dbname' = process.env.DATABASE_DBNAME;
  'meta.database.schema' = process.env.DATABASE_SCHEMA;
  public get(key: string): any {
    return this[key];
  }
}
const database = new DatabaseController();
export { database };
