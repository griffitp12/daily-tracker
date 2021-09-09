import devConfig from '../../knexfile.js';
import Knex  from 'knex';

// this will have to get more involved if I want to switch between multiple configs

export default Knex(devConfig);
