'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Subbreaddits', [
     { name: 'Poppy seed things', createdAt: new Date(), updatedAt: new Date()},
     { name: 'breadisntreal', createdAt: new Date(), updatedAt: new Date()},
     { name: 'Best Bakers', createdAt: new Date(), updatedAt: new Date()}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Subbreaddits', null, {});
  }
};
