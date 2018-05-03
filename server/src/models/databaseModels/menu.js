export default function (sequelize, DataTypes) {
  const Menu = sequelize.define('Menu', {
    date: {
      type: DataTypes.DATE
    }
  });

  Menu.associate = (models) => {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: ''
    });
  
  };
  return Menu;
}