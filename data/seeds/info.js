
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('heros').del()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        {name:'aquaman', powers:'speak to fish, breathes underwater'},
        {name:'batman', powers:'wealth'},
        {name:'superman', powers:'flight,indestructable, xray and heat vision'}
      ]);
    });
};
