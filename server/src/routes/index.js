import Meal from '../controllers/meal';
import meals from '../models/meal';
import Menu from '../controllers/menu';
import Order from '../controllers/order';

export default (app) => {

    app.get('/api/v1/meals/', Meal.getMeals);
    app.post('/api/v1/meals/', Meal.addMeal);
    app.put('/api/v1/meals/:mealId', Meal.updateMeal);
    app.delete('/api/v1/meals/:mealId', Meal.removeMeal);

    //Menu routes
    app.post('/api/v1/menu/', Menu.setMenu);
    
    //Order routes
    app.get('/api/v1/orders/', Order.getOrders);
    app.get('/api/v1/menu/', Menu.getMenu);
};
