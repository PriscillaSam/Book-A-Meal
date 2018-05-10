/* eslint no-unused-vars: 0 */
module.exports = {
  up: (queryInterface, Sequelize) => {
  
       queryInterface.bulkInsert('Meals', [
        {
          id:1,
          name: 'Fried rice and chicken',
          description: 'I love chicken',
          imgUrl:'img.jpg',
          price: 3000,
          createdAt:new Date(),
          updatedAt: new Date()
       },
       {
        id:2,
        name: 'Vegetable soup and semovita',
        description: '2 servings of soup and wraps of semo',
        imgUrl:'img.jpg',
        price: 2500,
        createdAt:new Date(),
        updatedAt: new Date()
       },
       {
        id:3,
        name: 'Beans and plantain',
        description: 'Bucket of beans and plantain',
        imgUrl:'img.jpg',
        price: 4000,
        createdAt:new Date(),
        updatedAt: new Date()
       }
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
     queryInterface.bulkDelete('Meals', [
      { id: 1 }, { id: 2}, { id: 3 }   
    
    ], {});
    
  }
};
