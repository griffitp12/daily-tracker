import { Knex } from 'knex';

export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('september', (table) => {
    table
      .integer('date')
      .unique()
      .notNullable()
      .primary();
    table.boolean('run');
    table.boolean('alcohol');
    table.integer('pushups');
    table.integer('situps');
  });
}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTableIfExists('september');
}
