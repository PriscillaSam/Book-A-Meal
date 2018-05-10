/* eslint no-unused-vars: 0 */

module.exports = {
   up: (queryInterface, Sequelize) => {
     queryInterface.createTable('Meals', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    imgUrl: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL
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
   queryInterface.dropTable('Meals');
}};