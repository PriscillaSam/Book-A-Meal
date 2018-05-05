/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('OrderMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId: {
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Meals',
          key: 'id'
        }      
      },
      orderId: {
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Orders',
          key: 'id'
        }      
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
     queryInterface.dropTable('OrderMeals');
  }
};