import devConfig from '../../knexfile.js';
import Knex  from 'knex';

const environment = process.env.ENVIRONMENT || 'development';

/* let knexConfig: Knex.Config<any>

if (environment === 'development') {
  knexConfig = devConfig
} */

export default Knex(devConfig);
