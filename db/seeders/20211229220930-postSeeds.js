'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
     {userId: 1, subId: 1, title: 'What is best bread?', content: 'What is the best bread i need only the best plz', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, subId: 2, title: 'Test Post 1', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, subId: 3, title: 'Test Post 2', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, subId: 1, title: 'Test Post 3', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
