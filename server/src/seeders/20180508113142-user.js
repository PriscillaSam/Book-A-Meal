/* eslint no-unused-vars: 0 */
const password = '$2a$10$4Wm6HHl9EMfd46UkP4pUEuiw2rHg.sgpuqIHtXi88nF.lr4JENvs2';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
       queryInterface.bulkInsert('Users', [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          password,
          userTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()  
        },
        {
          id: 2,
          name: 'Priscilla Doe',
          email: 'priscilladoe@gmail.com',
          userTypeId: 2,
          password,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          id: 3,
          name: 'Daniel Doe',
          email: 'danieldoe@gmail.com',
          password,
          userTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          id: 4,
          name: 'Michael Doe',
          email: 'michaeldoe@gmail.com',
          password,
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
