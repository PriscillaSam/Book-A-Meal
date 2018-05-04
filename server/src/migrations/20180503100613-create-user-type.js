/* eslint no-unused-vars: 0 */
module.exports ={
   up: (queryInterface, Sequelize) => {
   queryInterface.createTable('UserTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER
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