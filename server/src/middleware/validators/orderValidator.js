import Joi from 'joi';
import validate from 'express-validation';

const idRule = Joi.number().integer().positive();
const validateOrderCreate = validate({

    body: {
        userId: idRule.required(),
        mealId: idRule.required(),
        quantity: idRule.required().default(1),
        amount: idRule.required()
    }
});

const validateOrderUpdate = validate({
    params: {
        orderId: idRule.required()
    },

    body: {
        userId: idRule.required(),
        mealId: idRule.required(),
        quantity: idRule.required().default(1),
        amount: idRule.required()
    }
});

const validateOrderId = validate({
    params: {
        orderId: idRule.required()
    }
});

export {validateOrderCreate, validateOrderUpdate, validateOrderId } ;