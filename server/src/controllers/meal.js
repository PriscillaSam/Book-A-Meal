import meals from '../models/meal';


class Meal {

    static getMeals(req,res) {
        return res.json({
            meals
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
        meals.splice(mealIndex , 1);
        return res.status(200).send({
            success:'true',
            message:'meal successfully removed'
        });

    }
}

export default Meal;