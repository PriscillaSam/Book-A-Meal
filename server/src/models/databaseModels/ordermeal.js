module.exports = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    mealId:DataTypes.INTEGER, 
    orderId:DataTypes.INTEGER,   
  });
  
  return OrderMeal;
};