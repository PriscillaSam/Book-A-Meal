/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
   
       queryInterface.bulkInsert('Orders', [
        {
          id: 1,
          quantity: 2,
          amount: 3488,
          date: 'May 8th 2018',
          mealId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          id: 2,
          quantity: 2,
          amount: 4500,
          mealId: 1,
          userId: 2,
          date: 'May 10th 2018',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          quantity: 2,
          amount: 10000,
          mealId: 1,
          userId: 2,
          date: 'May 10th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          quantity: 2,
          amount: 10000,
          mealId: 2,
          userId: 3,
          date: 'May 9th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          quantity: 2,
          amount: 10000,
          mealId: 1,
          userId: 2,
          date: 'May 10th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
       queryInterface.bulkDelete('Orders', [
        
        { id: 1 }, { id: 2 }, { id: 3}, { id: 4}, { id: 5}
      
      ], {});
   
  }
};
