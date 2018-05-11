import express from 'express';
import MenuController from '../controllers/menu'; 
import { checkUserType } from '../middleware/authorize';
import validateMenuCreate from '../middleware/validators/menuValidator';

const router = express.Router();

const caterer = 1;
router.get('/', MenuController.getMenu);

router.use(checkUserType(caterer));
router.use(validateMenuCreate);
router.post('/', MenuController.setMenu);

export default router;