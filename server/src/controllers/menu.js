import menus from '../models/menu';
import meals from '../models/meal';
/**
 * @class MenuController
 */
class Menu {

    /**
     * Set's the menu for a particular day
     * 
     * @method setMenu
     * @param {object} req 
     * @param {object} res 
     */
    static setMenu(req, res) {
        const {
            userId,
            menuMeals,
            date
        } = req.body;

        if(!meals) {
            return res.status(400).send({
                status:'error',
                message:'Parameters are incomplete'
            });
        }

        const newMenu = {
            menuId: menus[menus.length - 1].menuId + 1,
            userId,
            menuMeals,
            date
        };

        menus.push(newMenu);

        return res.status(201).send({
            menus,           
            status:'success',
            message:`menu successfully created. menuId is ${newMenu.menuId}`
        });
    }

    /**
     * 
     * @method getMenu
     * @param {Object} req 
     * @param {Object} res 
     */
    static getMenu(req, res) {

        const date = '2018-4-30';
        const menu = menus.find(m => m.date === date);
        if(!menu) {
            return res.status(404).send({
                status:'error',
                message: 'menu not found in the database'
            });
        }

        return res.status(200).send({
            menu,
            status: 'success',
            message: 'menu successfully gotten'
        });

    }

}

export default Menu;