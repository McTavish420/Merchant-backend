import * as path from 'path';

// const getEnv = (key: string): string => {
//   const value = process.env[key];
//   return value ?? '';
// };

export const EXT = path.extname(__filename); 

export const LISTEN_PORT = parseInt(process.env.LISTEN_PORT ?? '3000', 10);

export const DATABASE_HOST = process.env.DATABASE_HOST ?? 'localhost';

export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT ?? '5432', 10);

export const DATABASE_USER  = process.env.DATABASE_USER || 'postgres';

export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'postgres';

export const DATABASE_SCHEMA = process.env.DATABASE_SCHEMA || 'merchant';