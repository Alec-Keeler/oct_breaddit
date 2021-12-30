'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Subscriptions', [
       { userId: 1, subId: 1, createdAt: new Date(), updatedAt: new Date()},
       { userId: 1, subId: 2, createdAt: new Date(), updatedAt: new Date()},
       { userId: 1, subId: 3, createdAt: new Date(), updatedAt: new Date()},
       { userId: 2, subId: 1, createdAt: new Date(), updatedAt: new Date()},
       { userId: 2, subId: 2, createdAt: new Date(), updatedAt: new Date()},
       { userId: 2, subId: 3, createdAt: new Date(), updatedAt: new Date()},
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Subscriptions', null, {});
  }
};
