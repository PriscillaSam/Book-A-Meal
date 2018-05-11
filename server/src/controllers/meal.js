import { Meal } from '../models/databaseModels';

/**
* @exports
* @class MealController
*
*/
class MealController {

    /**
     * Gets all meals from the database
     * @returns {Object} 
     * @param {object} req Request object
     * @param {object} res Response object
     */
    static async getMeals(req, res) {
        
        try {
        
            const meals = await Meal.findAll({ attributes: ['id', 'name', 'description', 'price'] });
                

            if(!meals) {
                return res.status(200).json({
                    status: 'error',
                    message: 'there are currently no meals in the system'
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'meals successfully gotten',
                meals 
            });
                    
        }  catch(error) {
            return res.status(500).json({
                status: 'Error',
                message: 'Ooops something happened'
        });
    }
    
               
    } 
    
/**
 * Updates an existing meal
 * @method updateMeal
 * @param {object} req
 * @param {object} res 
 * @returns An Object with response status and message indicating update success
 */
    static async updateMeal(req , res) {

        try{

        
            // get mealid
            const mealId = parseInt(req.params.id, 10);
            // Check that it is available
            const meal = Meal.findById(mealId);
            
            if(!meal) {
                return res.status(404).send({
                    status: 'error',
                    message: 'this meal does not exist'
                });
            }
            
            const updatedMeal = meal.update( req.body, {
                                     fields: Object.keys(req.body)
                                });
               
            return res.status(200).json({
                updatedMeal,
                status: 'success',
                message: `meal with id ${updatedMeal.id} has been updated`
            });
              
               
        
        }  catch(error) {
            return res.status(500).json({
                status: 'error',
                message: 'Could not perform update operation'
            });
        }
        
    }

    /**
     * Removes an existing meal from the database
     * @method
     * @param {object} req Request object
     * @param {object} res Response object
     */
    static async removeMeal(req, res) {

        try{
            // find meal 
            const mealId = parseInt(req.params.id, 10);        

            // check that meal exists
            const meal = await Meal.findById(mealId);          

            if(!meal) {
                return res.status(404).json({
                    status: 'error',
                    message: 'this meal does not exist'
                });
            }
            await meal.destroy();
            
            return res.status(200).json({
                status: 'success',
                message: 'meal successfully deleted'
            });  
        } catch(error) {
            return res.status(500).json({
                status:'Error',
                message: 'Ooops something went wrong'
            });
        }
                     
   
   
    }
    /**
     * @returns Object indicating success or fsilure of add operation
     * @param {object} req Request object containing meal fields
     * @param {object} res Response object 
     */
    static async addMeal(req, res) {
        
        try{
            const {
                name,
                description, 
                imgUrl, 
                price
            } = req.body;
    
           const meal = await Meal.findOne({ where: { name } });
           
            if(meal) {
                return res.status(400).json({
                    status: 'Error',
                    message: 'This meal already exists'
                });
            }
            const newMeal = await Meal.create({
                                            name,
                                            description,
                                            imgUrl,
                                            price
                                        });
              
            return res.status(201).json({
                status: 'Success',
                message:`Meal successfully added. MealId - ${newMeal.id}`,
    
            });             
    
        } catch(error) {
            return res.status(500).json({
                status: 'error',
                message: 'something went wrong'
             });
        }

    }
}

export default MealController;