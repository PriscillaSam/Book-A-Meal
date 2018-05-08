/* eslint no-unused-vars: 0 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    
       queryInterface.bulkInsert('Users', [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          password:'password',
          userTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()  
        },
        {
          id: 2,
          name: 'Priscilla Doe',
          email: 'priscilladoe@gmail.com',
          userTypeId: 2,
          password:'password',
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          id: 3,
          name: 'Daniel Doe',
          email: 'danieldoe@gmail.com',
          password:'password',
          userTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          id: 4,
          name: 'Michael Doe',
          email: 'michaeldoe@gmail.com',
          password: 'password',
          userTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      queryInterface.bulkDelete('Users', [
        { id: 1}, { id: 2}, { id: 3}, { id: 4}
      
      ], {});
    
  }
};
