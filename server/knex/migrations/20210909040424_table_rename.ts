import { Knex } from 'knex';

export function up(knex: Knex): Promise<void>{
  return knex.schema.renameTable('september', 'September');
}

export function down(knex: Knex): Promise<void> {
  return knex.schema.renameTable('September', 'september');
}
