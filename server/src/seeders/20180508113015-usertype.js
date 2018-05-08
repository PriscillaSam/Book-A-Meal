/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      queryInterface.bulkInsert('UserTypes', [{
        id: 1,
        name: 'Caterer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Customer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

};
