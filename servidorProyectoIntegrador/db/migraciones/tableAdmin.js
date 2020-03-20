exports.up = function(knex, Promise) {
    return knex.schema.createTable('admin', function(ul){
        ul.increments('id').notNullable();
        ul.string('admin').notNullable();
        ul.string('password').notNullable();
      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admin');
};
