import Joi from 'joi';
import validate from 'express-validation';
 
const userSchema = {
    register:Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.email().required(),
        password:Joi.string().required(),
        usertype:Joi.any().required()
    }),

    login: Joi.object().keys({
        email: Joi.email().required(),
        password: Joi.password().required()
    })
};

export default validate(userSchema);
