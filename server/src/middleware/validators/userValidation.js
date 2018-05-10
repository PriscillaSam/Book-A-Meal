import Joi from 'joi';
import validate from 'express-validation';

const email = Joi.string().trim().email();
const int = Joi.number().integer();
const string = Joi.string().trim();

const validateSignUp = validate({
    body: {
        name: string.required(),
        email: email.required(),
        password: string.required(),
        userTypeId: int.required()
    }
});

const validateLogin = validate({
    body: {  
        email: email.required(),
        password: string.required()
    }
});


export default {validateSignUp, validateLogin};
