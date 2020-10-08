
exports.up = function(knex) {
  return knex.schema
    .createTable('heros', tbl => {
        tbl.increments();
        tbl.text('name', 128)
        .notNullable();
        tbl.text('powers', 128);
    })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('heros')
};
