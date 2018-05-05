/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('MealMenus', {
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
          model: 'Meal',
          key: 'id'
        }      
      },
      menuId: {
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Menu',
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
    queryInterface.dropTable('MealMenus');
  }
};