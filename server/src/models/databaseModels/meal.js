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
      foreignKey: 'mealId',
      onDelete: 'SET NULL'
    });

    Meal.hasMany(models.Order, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE'
    });
  };
 
  return Meal;
};