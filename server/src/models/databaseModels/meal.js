module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
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
      type: DataTypes.NUMBER,
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
    
  };
  return Meal;
};