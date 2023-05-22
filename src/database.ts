import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: process.env.SQLITE_CLIENT || 'sqlite',
  connection: {
    filename: process.env.FILE_NAME || './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
