export function up(knex) {
    return knex.schema.renameTable('september', 'September');
  }
  
  export function down(knex) {
    return knex.schema.renameTable('September', 'september');
  }
  