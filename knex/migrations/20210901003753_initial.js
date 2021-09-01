exports.up = function(knex) {
  return knex.schema.createTable('september', (table) => {
    table
      .integer('date')
      .unique()
      .notNullable()
      .primary();
    table.boolean('run');
    table.boolean('alcohol');
    table.int('pushups');
    table.int('situps');
    table.text('name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('september');
};
