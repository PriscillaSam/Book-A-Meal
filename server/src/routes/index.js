import Meal from '../controllers/meal';
import meals from '../models/meal';
import Menu from '../controllers/menu';

export default (app) => {

    app.get('/api/v1/meals/', Meal.getMeals);

    app.put('/api/v1/meals/:mealId', Meal.updateMeal);

    app.delete('/api/v1/meals/:mealId', Meal.removeMeal);

    //Menu routes
    app.post('/api/v1/menu/', Menu.setMenu);
    app.get('/api/v1/menu/', Menu.getMenu);
};
