import Meal from '../controllers/meal';
import meals from '../models/meal';


export default (app) => {

    app.get('/api/v1/meals/', Meal.getMeals);
    app.put('/api/v1/meals/:mealId', Meal.updateMeal);
}
