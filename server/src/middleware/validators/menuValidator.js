import Joi from 'joi';
import validate from 'express-validation';

const idRule = Joi.number().integer().positive();
const validateMenuCreate = validate({

    body: {
        
        mealIds: Joi.array()
        .single(true)
        .min(1)
        .items( idRule  )      
    }
});

export default validateMenuCreate;