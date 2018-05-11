/* eslint consistent-return: 0 */

import moment from 'moment';
import { Order, Menu, Meal, User } from '../models/databaseModels';
/**
 * @class Order Controller
 */
class OrderController {

    /**
     * @method makeOrder
     * @param {object} req 
     * @param {object} res 
     */
    static async makeOrder(req,res) {
        
        try{

            const {            
                userId,
                mealId,
                quantity,                            
            } = req.body;
    
            if(!userId || !mealId) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Incomplete parameters supplied'
                });
            }
                const date = moment().format('MMMM Do YYYY');
                // check if menu exists
                const menu = await Menu.findOne({ where: { date }});
                if(!menu) {
                    res.status(404).json({
                        status: 'Error',
                        message: 'The menu for today has not been set yet. Please be patient'
                    });
                }

                
                // check if user exists
                const user = await User.findOne({ where: {id: userId}});
                // check if meal exists
                const meal = await Meal.findOne({ where: { id: mealId }});
                if(!user) {
                    return res.send(404).json({
                        status: 'Error',
                        message: 'This user does not exist'
                    });
                }
                if(!meal) {
                    return res.status(404).json({
                        status: 'Error',
                        message: 'This meal does not exist'
                    });
                }
                const amount = quantity * meal.price;
    
                await Order.create({
                                date,
                                mealId,
                                userId,
                                quantity,
                                amount
                            });

                                            
            return res.status(201).send({
                status:'success',
                message:`Your Order was successful. You ordered for ${meal.name}`
            });
        } catch(error) {
            res.status(500).json({
                error
                // status: 'Error',
                // message: 'Ooops!! something happened'
            });
        }
        
    }

    /**
     * @method updateOrder
     * @param {object} req 
     * @param {object} res 
     */
    static async updateOrder(req, res) {

        try{
            const orderId = parseInt(req.params.orderId, 10);

            // check if order exists
            const order = await Order.findOne({ where: { id: orderId}});
            if(!order) {
                return res.status(404).json({
                    status: 'Error',
                    message:'This order does not exist'
                });
            }
          
           const updatedOrder = await order.update( req.body, {
                                        fields: Object.keys(req.body)
                                    });

            return res.status(200).json({
                status: 'success',
                message: 'Order was successfully updated',
                updatedOrder
            });
    
        } catch(error) {
            return res.status(500).json({
                status: 'Error',
                message: 'Ooops!!! something happened'
            });
        }
        
      


    }
    /**
     * get all orders for a particular day
     * @method getTodayOrders
     * @param {object} req 
     * @param {object} res 
     */
    static async getTodayOrders(req, res) {

        try{
            const date = moment().format('MMMM Do YYYY');
        // filter through orders using this date

        const orders = await Order.findAll({
                            where: { date },
                            include: [{
                                model: Meal,
                            }]
                        });

        if(!orders || orders.length === 0) {
            return res.status(200).json({
                status: 'success',
                message: 'There are no orders for today'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Your orders were gotten successfully',
            orders
        });
    } catch(error) {
        res.status(500).json({
            status: 'Error',
            message: 'Ooops!! something went wrong'
        });
    }

       

    }
    /**
     * @method getUserOrders
     * @param {object} req 
     * @param {object} res 
     */
    static async getUserOrders(req, res) {

        try{
            const userId = parseInt(req.params.userId, 10);

            // get all orders with userId
            const userOrders = await Order.findAll({ where: { userId }, include: [{ model: Meal }]});
            if(!userOrders || userOrders.length === 0) {
                return res.status(200).send({
                    status:'success',
                    message:'you currently have no orders to display'
                });
    
            }
    
            return res.status(200).send({
                status:'success',
                message:'Orders successfully gotten',
                userOrders
            });

        } catch(error) {
            return res.status(500).json({
                status:'Error',
                message: 'Ooops!! something went wrong'
            });
        }
       
    }
    /**
     * @method getAllOrders
     * @param {object} req 
     * @param {object} res 
     */
    static async getAllOrders(req, res) {

       try{
            const allOrders = await Order.findAll({  
                include: [{
                     model: Meal,
                     
                }]});

            if(!allOrders || allOrders.length === 0) {
                return res.status(200).json({
                    status: 'success',
                    message: 'you currently have no orders to display'
                });
            }
            
            res.status(200).json({
                status:'success',
                message: 'Orders gotten successfully',
                allOrders
            });

       } catch(error) {
            res.status(200).json({
                status:'success',
                message: 'Ooops!! something went wrong',
                
            });      
         }

    }

}

export default OrderController;

