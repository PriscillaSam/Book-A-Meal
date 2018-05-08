/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
   
       queryInterface.bulkInsert('Orders', [
        {
          id: 1,
          quantity: 2,
          amount: 3488,
          date: 'May 8th 18',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          id: 2,
          quantity: 2,
          amount: 4500,
          date: 'May 9th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          quantity: 2,
          amount: 10000,
          date: 'May 10th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
       queryInterface.bulkDelete('Orders', [
        
        { id: 1 }, { id: 2 }, { id: 3}
      
      ], {});
   
  }
};
