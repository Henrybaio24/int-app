
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recicladoras', function(rec) {
      rec.increments('id').notNullable();
      rec.string('nombre').notNullable();
      rec.string('descripcion').notNullable();
      rec.string('contacto').notNullable();
      rec.string('direccion').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recicladoras');
};
