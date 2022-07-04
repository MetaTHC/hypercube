import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false,
    ENTITIES: [__dirname + '**/database/entities/**/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '**/database/migrations/*{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/database/migrations',
    },
    MIGRATIONS_RUN: true,
  };

  let ormconfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'sqlite',
    database: '../target/db/sqlite-dev-db.sql',
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };

  if (process.env.BACKEND_ENV === 'prod') {
    ormconfig = {
      name: 'default',
      type: 'postgres',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      schema: process.env.DB_SCHEMA,
      logging: false,
      synchronize: commonConf.SYNCRONIZE,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
    };
  }

  if (process.env.BACKEND_ENV === 'test') {
    ormconfig = {
      name: 'default',
      type: 'sqlite',
      database: ':memory:',
      keepConnectionAlive: true,
      logging: true,
      synchronize: true,
      entities: commonConf.ENTITIES,
      migrations: commonConf.MIGRATIONS,
      cli: commonConf.CLI,
      migrationsRun: commonConf.MIGRATIONS_RUN,
    };
  }
  return ormconfig;
}

export { ormConfig };
