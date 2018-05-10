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
    amount:{      
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
   
  });

  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    
    Order.belongsTo(models.Meal, {
      foreignKey:'mealId',
      onDelete:''
    });
  };

  

  return Order;
};