/* eslint no-unused-vars: 0 */

module.exports = {
   up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Menus', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
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
    queryInterface.dropTable('Menus');
 }};