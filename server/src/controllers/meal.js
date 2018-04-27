import meals from '../models/meal';

/**
 * @class Meal
 */
class Meal {

    /**
     * @returns {Object} meals
     * @param {*} req 
     * @param {*} res 
     */
    static getMeals(req,res) {
        return res.json({
            meals
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

        const meal = {
            mealId: meals.length,
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