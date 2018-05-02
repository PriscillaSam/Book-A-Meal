import express from 'express';
import OrderController from '../controllers/order';
import {validateOrderCreate, validateOrderUpdate} from '../middleware/validators/orderValidator';

const router = express.Router();

router.get('/', OrderController.getTodayOrders); // get today's orders
router.post('/',validateOrderCreate, OrderController.makeOrder); // make an order
router.put('/:orderId', validateOrderUpdate, OrderController.updateOrder); // update an order
router.get(':userId/orders', OrderController.getUserOrders); // get all orders belonging to the user
router.get('/orders', OrderController.getAllOrders); // gets the entire order history

export default router;
