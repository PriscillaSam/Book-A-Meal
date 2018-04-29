import orders from '../models/order';
import users from '../models/user';

/**
 * @class Order Controller
 */
class Order {

    /**
     * @method makeOrder
     * @param {object} req 
     * @param {object} res 
     */
    static makeOrder(req,res) {
        const {            
            userId,
            mealId,
            quantity,
            amount,            
        } = req.body;

        if(!userId || !mealId) {
            return res.status(400).send({
                status: 'error',
                message: 'Incomplete parameters supplied'
            });
        }

        const newOrder = {
            orderId: orders[orders.length - 1].orderId + 1, 
            userId,
            mealId,
            quantity,
            amount,
        };

        orders.push(newOrder);

        return res.status(201).send({
            status:'success',
            message:'Order successful'
        });
    }
    /**
     * get all orders for a particular day
     * @method getOrders
     * @param {object} req 
     * @param {object} res 
     */
    static getOrders(req, res) {

        const date = new Date().toTimeString();

        //filter through orders using this date
        const todayOrders = orders.filter(o => o.date.toTimeString() === date);
        
        if(todayOrders.length === 0) {
            return res.status(204).send({
                message:'there are no orders yet'
            });
        }

        return res.status(200).send({
            orders
        });

    }

}

export default Order;

