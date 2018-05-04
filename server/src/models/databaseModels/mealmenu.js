module.exports = (sequelize, DataTypes) => {
  const MealMenu = sequelize.define('MealMenu', {

    mealId: DataTypes.INTEGER,  
    menuId: DataTypes.INTEGER,     
    
  });

  return MealMenu;
};