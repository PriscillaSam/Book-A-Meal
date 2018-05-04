/* eslint no-unused-vars: 0 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    userTypeId: {
      type:Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
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
  
  queryInterface.dropTable('Users');

}};