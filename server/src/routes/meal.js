import express from 'express';
import MealController from '../controllers/meal';
import {validateCreateMeal, validateUpdateMeal, validateMealId} from '../middleware/validators/mealValidator';

const router = express.Router();

router.get('/', MealController.getMeals);
router.post('/',validateCreateMeal , MealController.addMeal);
router.put('/:mealId',validateUpdateMeal, MealController.updateMeal);
router.delete('/:mealId',validateMealId, MealController.removeMeal);

export default router;