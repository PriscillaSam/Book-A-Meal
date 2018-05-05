import express from 'express';
import mealRoutes from './meal';
import orderRoutes from './order';
import menuRoutes from './menu';
import userRoutes from './user';

const router = express.Router();

router.use('/api/v1/meals', mealRoutes);
router.use('/api/v1/orders', orderRoutes);
router.use('/api/v1/menus', menuRoutes);
router.use('/api/v1/users', userRoutes);

export default router;