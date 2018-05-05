/* eslint consistent-return: 0 */
import { User } from '../models/databaseModels';


/**
 * checks if user already exists via email
 * @param {object} req object from the user 
 * @param {object} res response 
 * @param {function} next function that calls next middleware down the chain
 */
const checkUserExistence = (req, res, next ) => {  
   
    User.findOne({
        where: {email: req.body.email} ,
    })
    .then(user => {
        if(user) {
            return res.status(400).json({
                status: 'error',
                message: 'this user already exists'
            }); 
    }
    next();
    }); 

};

export default checkUserExistence;


