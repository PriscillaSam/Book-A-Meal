import Joi from 'joi';
import validate from 'express-validation';

const validateCreateMeal =  validate({
    
        body: {
            name:Joi.string().trim().required(),
            description:Joi.string().trim().required(),
            price:Joi.number().positive().required(),
            imgUrl:Joi.string().trim()
        }
      
});

const validateUpdateMeal = validate({
        params: {
            mealId:Joi.number().integer().positive()
        },
        body: {
            name: Joi.string(),
            description:Joi.string().trim(),
            price: Joi.number().positive()
        }
    });

const validateMealId = validate({
        params: {
            mealId:Joi.number().integer().positive()
        }
});

export {validateCreateMeal, validateMealId, validateUpdateMeal};


