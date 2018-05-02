import Joi from 'joi';
import validate from 'express-validation';

const validateCreateMeal =  validate({
    
        body: {
            name:Joi.string().required(),
            description:Joi.string().required(),
            price:Joi.number().positive().required(),
            imgUrl:Joi.string()
        }
      
});

const validateUpdateMeal = validate({
        params: {
            mealId:Joi.number().integer().positive()
        },
        body: {
            name: Joi.string(),
            description:Joi.string(),
            price: Joi.number().positive()
        }
    });

const validateMealId = validate({
        params: {
            mealId:Joi.number().integer().positive()
        }
});

export {validateCreateMeal, validateMealId, validateUpdateMeal};


