import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const config: Knex.Config = {
  client: env.SQLITE_CLIENT || 'sqlite',
  connection: {
    filename: env.DATABASE_URL || './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
