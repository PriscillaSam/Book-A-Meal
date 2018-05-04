module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id:{  
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER
    },
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
      onDelete: 'SET NULL'    
      
    });

    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  return Order;
};