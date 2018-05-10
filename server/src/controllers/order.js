/* eslint consistent-return: 0 */

import moment from 'moment';
import {Order, Menu, Meal, User } from '../models/databaseModels';
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
                amount,            
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
                status: 'Error',
                message: error.stack
            });
        }
        
    }

    /**
     * @method updateOrder
     * @param {object} req 
     * @param {object} res 
     */
    static updateOrder(req, res) {

        const orderId = parseInt(req.params.orderId, 10);

        // check if order exists
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

        // remove former order and replace with the new
        orders.splice(orderIndex, 1, updatedOrder);
        return res.status(200).send({
            status:'success',
            message: 'order successfully updated'
        });


    }
    /**
     * get all orders for a particular day
     * @method getTodayOrders
     * @param {object} req 
     * @param {object} res 
     */
    static getTodayOrders(req, res) {

        const date = '2018-3-14';

        // filter through orders using this date
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
        const userId = parseInt(req.params.userId, 10);

        // get all orders with userId
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
    /**
     * @method getAllOrders
     * @param {object} req 
     * @param {object} res 
     */
    static getAllOrders(req, res) {

        return res.status(200).send({
            orders
        });
    }

}

export default OrderController;

