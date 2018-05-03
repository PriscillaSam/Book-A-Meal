export default function (sequelize, DataTypes) {
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
      type: DataTypes.NUMBER,
      allowNull: false
    }
    
  });    
 
  Meal.associate = (models) => {
    // associations can be defined here
    
  };
  return Meal;
}