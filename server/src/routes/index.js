import Meal from '../controllers/meal';
import meals from '../models/meal';


export default (app) => {

    app.get('/api/v1/meals/', Meal.getMeals);
    app.post('/api/v1/meals/', Meal.addMeal);
}
