import express from 'express';
import OrderController from '../controllers/order';
import {validateOrderCreate, validateOrderUpdate} from '../middleware/validators/orderValidator';
import { checkUserType } from '../middleware/authorize';

const router = express.Router();



const caterer = 1;
const customer = 2;

router.get('/',checkUserType(caterer), OrderController.getTodayOrders); // get today's orders
router.get('/orders',checkUserType(caterer), OrderController.getAllOrders); // gets the entire order history

router.use(checkUserType(customer));
router.post('/',validateOrderCreate, OrderController.makeOrder); // make an order
router.get(':userId/orders', OrderController.getUserOrders); // get all orders belonging to the user
router.put('/:orderId', validateOrderUpdate, OrderController.updateOrder); // update an order

export default router;
