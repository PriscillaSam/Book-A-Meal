export default function (sequelize, DataTypes) {
  const Order = sequelize.define('Order', {
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false
    
    },
    Amount:{      
      type: DataTypes.NUMBER,
      allowNull: false
    }
  });

  Order.associate = (models) => {
    // associations can be defined here
    Order.hasOne(models.Meal, {
      foreignKey: 'mealId',
      
      
    });
  };

  return Order;
}