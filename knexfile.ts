import 'dotenv/config'
import { Knex } from 'knex'

const devConfig: Knex.Config = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'migrations',
      directory: './dist/server/knex/migrations',
    },
    seeds: {
      directory: './data',
    },
};

export default devConfig
