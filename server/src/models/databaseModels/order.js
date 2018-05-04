module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id:{  
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    
    },
    Amount:{      
      type: DataTypes.DECIMAL,
      allowNull: false
    },
   
  });

  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsToMany(models.Meal, {
      through: models.OrderMeal,
      foreignKey: 'OrderId',
      onDelete: 'CASCADE'
    });
    
  };

  return Order;
};