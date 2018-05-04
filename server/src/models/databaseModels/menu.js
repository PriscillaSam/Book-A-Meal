module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER
    },
   
  });

  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsToMany(models.Meal, {
      through: models.MealMenu,
      foreignKey: 'MenuId',
      onDelete: 'CASCADE'
    });
  };
  return Menu;
};