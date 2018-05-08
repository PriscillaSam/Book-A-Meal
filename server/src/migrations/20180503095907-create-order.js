/* eslint no-unused-vars: 0 */

module.exports ={
   up: (queryInterface, Sequelize) => {
   queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    amount: {
      type: Sequelize.DECIMAL
    },   
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    date: {
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
   queryInterface.dropTable('Orders');
}};