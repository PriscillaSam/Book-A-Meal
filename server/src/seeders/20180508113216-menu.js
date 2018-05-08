/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     queryInterface.bulkInsert('Menu', [
        {
          id: 1,
          date: 'May 9th 18',
          createdAt: new Date(),
          updatedAt: new Date()

        }, 
        {
          id: 2,
          date: 'May 8th 18 ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          date: 'May 10th 18',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
     queryInterface.bulkDelete('Menus',[
        {
          id: 1
        },
        {
          id:2
        },
        {
          id:3
        }        
      ] , {});
    
  }
};
