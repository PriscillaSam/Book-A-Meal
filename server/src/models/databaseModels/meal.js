module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
    
  });    
 
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsToMany(models.Menu, {
      through: models.MealMenu,
      foreignKey: 'MealId',
      onDelete: 'CASCADE'
    });

    Meal.belongsToMany(models.Order, {
      through: models.OrderMeal,
      foreignKey: 'MealId',
      onDelete: 'CASCADE'
    });
  };
 
  return Meal;
};