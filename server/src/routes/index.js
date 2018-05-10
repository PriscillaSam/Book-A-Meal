import express from 'express';
import mealRoutes from './meal';
import orderRoutes from './order';
import menuRoutes from './menu';
import userRoutes from './user';
import { authorize } from '../middleware/authorize';

const router = express.Router();

router.use('/api/v1/auth', userRoutes);

router.use(authorize);
router.use('/api/v1/meals', mealRoutes);
router.use('/api/v1/orders', orderRoutes);
router.use('/api/v1/menus', menuRoutes);

export default router;