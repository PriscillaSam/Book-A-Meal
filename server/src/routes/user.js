import express from 'express';
import UserController from '../controllers/user';
import { validateSignUp, validateLogin } from '../middleware/validators/userValidation';

const router = express.Router();

router.post('/signup',validateSignUp, UserController.registerUser);
router.post('/login',validateLogin, UserController.loginUser);
export default router;
