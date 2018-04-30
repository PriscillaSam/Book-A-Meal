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
     * @method updateOrder
     * @param {object} req 
     * @param {object} res 
     */
    static updateOrder(req, res) {

        const orderId = parseInt(req.params.orderId);

        //check if order exists
        const order = orders.find(o => o.orderId === orderId);
        const orderIndex = orders.findIndex(o => o.orderId === orderId);

        if(!order) {
            return res.status(404).send({
                status:'error',
                message:'this order does not exist'
            });
        }

        const updatedOrder = {
            orderId, 
            userId: req.body.userId || order.user.userId,
            mealId: req.body.mealId || order.meal.mealId,
            quantity: req.body.quantity || order.quantity,
            amount: req.body.amount || order.amount
        };

        //remove former order and replace with the new
        orders.splice(orderIndex, 1, updatedOrder);
        return res.status(200).send({
            status:'success',
            message: 'order successfully updated'
        });


    }
    /**
     * get all orders for a particular day
     * @method getOrders
     * @param {object} req 
     * @param {object} res 
     */
    static getOrders(req, res) {

        const date = '2018-3-14';

        //filter through orders using this date
        const todayOrders = orders.filter(o => o.date === date);
        
        if(todayOrders.length === 0) {                      

            return res.status(204).send({
                message:'there are no orders yet'
            });
        }

        return res.status(200).send({
            status:'success',
            message:'request successful. Orders succesfully gotten',
            todayOrders,            
        });

    }
    /**
     * @method getUserOrders
     * @param {object} req 
     * @param {object} res 
     */
    static getUserOrders(req, res) {
        const userId = parseInt(req.params.userId);

        //get all orders with userId
        const userOrders = orders.filter(o => o.user.userId === userId);
        if(userOrders.length === 0) {
            return res.status(204).send({
                status:'no content',
                message:'you currently have no orders to display'
            });

        }

        return res.status(200).send({
            status:'success',
            message:'Orders successfully gotten',
            userOrders
        });
    }

}

export default Order;

