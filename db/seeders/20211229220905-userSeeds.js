'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {username: 'aleclikesbreadpuns', email: 'alec@alec.alec', password: 'hunter12', faveBread: 'garlic bread', createdAt: new Date(), updatedAt: new Date()},
     {username: 'bread4Prez', email: 'dan@dan.dan', password: 'strongpass', faveBread: 'focaccia', createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
