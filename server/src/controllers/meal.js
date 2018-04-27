import meals from '../models/meal';

/**
 * @class MealController
 */
class Meal {

    static getMeals(req,res) {
        return res.status(200).send({
            meals,
            message:'meals successfully gotten'
        });
    } 
    
/**
 * @method updateMeal
 * @param {object} req
 * @param {object} res 
 */
    static updateMeal(req , res) {
        //get mealid
        const mealId = parseInt(req.params.mealId);
        //Check that it is available
        const meal = meals.find(meal => meal.mealId == mealId);
        const mealIndex = meals.findIndex(meal => meal.mealId == meal.mealId); 
        if(!meal) {
            return res.status(404).send({
                success: 'false',
                message: 'this meal does not exist'
            });
        }
        
        //update values
        const updatedMeal = {            
            mealId: meal.mealId,
            name: req.body.name || meal.name,
            description: req.body.description || meal.description,
            price : parseInt(req.body.price) || meal.price

        };

        meals.splice(mealIndex, 1 , updatedMeal);
        return res.status(200).send({
            updatedMeal,
            success: 'true',
            message: 'meal successfully updated',

        });

    }


    static removeMeal(req, res) {
        //find meal 
        const mealId = parseInt(req.params.mealId);        

        const meal = meals.find(meal => meal.mealId == mealId);
        const mealIndex = meals.findIndex(meal => meal.mealId == mealId);

        if(!meal) {
            return res.status(404).send({
                success:'false',
                message: 'this meal does not exist'
            });
        }
        //else delete meal
        const removedMeal = meals.splice(mealIndex , 1);
        return res.status(200).send({ 
            removedMeal,           
            success:'true',
            message:'meal successfully removed'
        });

    }
}

export default Meal;