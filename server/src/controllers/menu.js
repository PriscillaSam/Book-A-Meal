/* eslint consistent-return: 0 */
import moment from 'moment';
import { Meal , Menu } from '../models/databaseModels';

/**
 * @exports
 * @class MenuController
 */
class MenuController {

    /**
     * Set's the menu for a particular day  
     * @method setMenu
     * @param {object} req Request Object containing an array of mealIds
     * @param {object} res Response Object
     */
    static async setMenu(req, res) {
        try {

        
       const { mealIds } = req.body;
            
       mealIds.forEach(id => {
           if(typeof id !== 'number') {
            return res.status(404).json({
                status: 'Error',
                message: 'This meal does not exist'
            });
           }
           Meal.findOne({ where: { id }})
                            .then(meal => {
                                if(!meal) {
                                    return res.status(404).json({
                                        status: 'Error',
                                        message: 'This meal does not exist'
                                    });
                                }
                            });
           
           
       });

       const date =  moment().format('MMMM Do YYYY');

       // check if a menu already exists. Check by date
       const menu = await Menu.findOne({
                            where: {
                                date
                            }   
                        });
        if(menu) {
            return res.status(400).json({
                status:'error',
                message:'A menu already exists for today'
            });
        }    

        const newMenu = await Menu.create({ date });
        newMenu.addMeals(mealIds);
     
        return res.status(201).json({
            newMenu,
            status:'success',
            message:'Menu successfully added'
        });       
    } catch(error) {
        return res.status(500).json({
            status: 'Error',
            message: 'Ooops!!! something happened'
        });
        }   
    }

    /**
     * Get's menu for the particular day
     * @method getMenu
     * @param {Object} req 
     * @param {Object} res 
     */
    static async getMenu(req, res) {
        
        const date = moment().format('MMMM Do YYYY');

        try{

            const menu = await Menu.findOne({
                                where: { date },
                                include: [{
                                    model: Meal,
                                    through: {
                                        foreignKey: 'mealId',
                                        attributes: ['id', 'name'],
                                    }
                                }]
                            });

            if(!menu) {
                return res.status(404).json({
                    status: 'no content',
                    message: 'no menu yet for today'
                });
            }            

            return res.status(200).json(menu);

        } catch(error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
       
          
    }
    

}

export default MenuController;