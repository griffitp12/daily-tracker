export function up(knex) {
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
    table.text('name').notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('september');
}
