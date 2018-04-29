import orders from '../models/order';

/**
 * @class Order Controller
 */
class Order {

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
            status:'success',
            message:'request successful. Orders succesfully gotten',
            todayOrders,
        });

    }

}

export default Order;

