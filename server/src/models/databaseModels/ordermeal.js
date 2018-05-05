

module.exports = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    mealId:{
      type:DataTypes.INTEGER,
    },
    
    orderId:{
      type: DataTypes.INTEGER, 
    }  
  });
  
  return OrderMeal;
};