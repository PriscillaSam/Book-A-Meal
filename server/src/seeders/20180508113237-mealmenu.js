/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
   
     queryInterface.bulkInsert('MealMenus', [
        {
          id: 1,
          mealId: 1,
          menuId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        id: 2,
        mealId: 2,
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        mealId: 1,
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
  
     queryInterface.bulkDelete('Person', [
        { id: 1 }, { id: 2 }, {id: 3}
        
      ], {});
    
  }
};
