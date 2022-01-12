'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Posts', [
      { userId: 4, subId: 1, title: 'Test Post 4', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, subId: 2, title: 'Test Post 5', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, subId: 3, title: 'Test Post 6', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, subId: 1, title: 'Test Post 7', content: 'This is a test post', createdAt: new Date(), updatedAt: new Date() },
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
