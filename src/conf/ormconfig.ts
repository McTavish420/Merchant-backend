import path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import * as globals from '../globals'
import { DataSource } from 'typeorm';

const EXT = path.extname(__filename);

const main: PostgresConnectionOptions = {
  type: "postgres",
  host: globals.DATABASE_HOST,
  port: globals.DATABASE_PORT,
  username: globals.DATABASE_USER,
  password: globals.DATABASE_PASSWORD,
  database: globals.DATABASE_SCHEMA,
  extra: {
    charset: 'utf8mb4',
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
  migrations: globals.EXT === '.ts' ? ['migrations/*.ts'] : [],
  entities: [
    path.join(__dirname, `../model/entity/*${globals.EXT}`),
  ],
}

export const config = {
  ...main,
  seeds: [
    'test/support/typeorm/seed/*.ts',
  ],
  cli: {
    entitiesDir: 'src/model/entity',
    migrationsDir: 'migrations',
  },
};

export const dataSource = new DataSource(config);

export default config;



