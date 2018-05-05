import express from 'express';
import UserController from '../controllers/user';
import { validateSignUp } from '../middleware/validators/userValidation';
import  checkIfUserExists  from '../middleware/emailCheck';

const router = express.Router();

router.post('/signup',validateSignUp, checkIfUserExists, UserController.registerUser);
router.post('/login', UserController.loginUser);
export default router;