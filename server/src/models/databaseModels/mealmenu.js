module.exports = (sequelize, DataTypes) => {
  const MealMenu = sequelize.define('MealMenu', {

    mealId: {
      type: DataTypes.INTEGER,
    },

    menuId: {
      type:DataTypes.INTEGER,
    }     
    
  });

  return MealMenu;
};