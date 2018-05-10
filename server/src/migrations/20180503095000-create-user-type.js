/* eslint no-unused-vars: 0 */
module.exports ={
   up: (queryInterface, Sequelize) => {
   queryInterface.createTable('UserTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},

down: (queryInterface, Sequelize) => { 
   queryInterface.dropTable('UserTypes');
}};