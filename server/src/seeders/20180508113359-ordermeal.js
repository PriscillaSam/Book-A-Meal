/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
   
       queryInterface.bulkInsert('OrderMeals', [
        {
          id: 1,
          orderId: 1,
          mealId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          orderId: 1,
          mealId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          orderId: 2,
          mealId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }     
        
        
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
       queryInterface.bulkDelete('Person', [
        { id: 1 }, { id: 2 }, { id: 3} 
      
      ], {});
   
  }
};
