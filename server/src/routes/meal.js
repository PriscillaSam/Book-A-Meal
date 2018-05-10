import express from 'express';
import MealController from '../controllers/meal';
import {validateCreateMeal, validateUpdateMeal, validateMealId} from '../middleware/validators/mealValidator';
import { checkUserType } from '../middleware/authorize';

const router = express.Router();
const userTypeAllowedId = 1;

router.use(checkUserType(userTypeAllowedId));
router.get('/', MealController.getMeals);
router.post('/',validateCreateMeal , MealController.addMeal);
router.put('/:id',validateUpdateMeal, MealController.updateMeal);
router.delete('/:id',validateMealId, MealController.removeMeal);

export default router;