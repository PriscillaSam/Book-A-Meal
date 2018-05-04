module.exports = (sequelize, DataTypes) => {
  const MealMenu = sequelize.define('MealMenu', {
    mealId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model:'Meal',
        key:'id'
      }
    },

    menuId: {
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'Menu',
        key: 'id'
      }
    }
  });

  return MealMenu;
};