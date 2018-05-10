module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
   
   date: {
     allowNull: false,
     type: DataTypes.STRING
   }
  });

  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsToMany(models.Meal, {
      through: models.MealMenu,
      foreignKey: 'menuId',
      onDelete: 'CASCADE'
    });
  };
  return Menu;
};