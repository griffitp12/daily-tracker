import config from '../../knexfile.js'
import Knex from 'knex'

const environment = process.env.ENVIRONMENT || 'development'

let knexConfig = config[environment]

export default Knex(knexConfig)
