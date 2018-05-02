import express from 'express';
import MenuController from '../controllers/menu';
 

const router = express.Router();

router.get('/', MenuController.getMenu);
router.post('/', MenuController.setMenu);

export default router;