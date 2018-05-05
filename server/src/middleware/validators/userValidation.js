import Joi from 'joi';
import validate from 'express-validation';

const email = Joi.string().email();
const int = Joi.number().integer();
const string = Joi.string();

const validateSignUp = validate({
    body: {
        name: string.required(),
        email: email.required(),
        password: string.required(),
        usertypeId: int.required()
    }
});

const validateLogin = validate({
    body: {  
        email: email.required(),
        password: string.required()
    }
});


export default {validateSignUp, validateLogin};
