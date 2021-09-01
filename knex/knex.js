import config from '../knexfile'
import { Knex } from 'knex'

const environment = process.env.ENVIRONMENT || 'development'
/* const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config); */

export default Knex.config
