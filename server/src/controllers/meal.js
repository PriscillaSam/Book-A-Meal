import meals from '../models/meal';

/**
*
* @class MealController
*
*/
class Meal {

    /**
     * @returns {Object} meals
     * @param {*} req 
     * @param {*} res 
     */
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
        // get mealid
        const mealId = parseInt(req.params.mealId, 10);
        // Check that it is available
        const meal = meals.find(m => m.mealId === mealId);
        const mealIndex = meals.findIndex(m => m.mealId === meal.mealId); 
        if(!meal) {
            return res.status(404).send({
                success: 'false',
                message: 'this meal does not exist'
            });
        }
        
        // update values
        const updatedMeal = {            
            mealId: meal.mealId,
            name: req.body.name || meal.name,
            description: req.body.description || meal.description,
            price : parseInt(req.body.price, 10) || meal.price

        };
        // try using map 
        meals.splice(mealIndex, 1 , updatedMeal);
        return res.status(200).send({
            updatedMeal,
            success: 'true',
            message: 'meal successfully updated',

        });

    }

    /**
     * @method removeMeal
     * @param {object} req 
     * @param {object} res 
     */
    static removeMeal(req, res) {
        // find meal 
        const mealId = parseInt(req.params.mealId, 10);        

        const meal = meals.find(m => m.mealId === mealId);
        const mealIndex = meals.findIndex(m => m.mealId === mealId);

        if(!meal) {
            return res.status(404).send({
                success:'false',
                message: 'this meal does not exist'
            });
        }
        // else delete meal
        const removedMeal = meals.splice(mealIndex , 1);
        return res.status(200).send({ 
            removedMeal:removedMeal[0],           
            success:'true',
            message:'meal successfully removed'
        });

    }  
    
    /**
     * @returns {Object} meal 
     * @param {*} req 
     * @param {*} res 
     */
    static addMeal(req, res) {
        
        const {
            name,
            description, 
            imageUrl, 
            price
        } = req.body;

        if(!name || !description || !price) {

            return res.status(400).json({
                success: 'false',
                message: 'the parameters supplied are incomplete'
            });

        }
        // generate id
        const meal = {
            mealId: meals[meals.length - 1].mealId + 1,
            name,
            description,
            imageUrl,
            price
        };

        meals.push(meal);
        return res.status(201).json({
            success: 'true',
            message: `meal with mealId ${meal.mealId} was successfully created`,
            meal
        });   

    }
}

export default Meal;