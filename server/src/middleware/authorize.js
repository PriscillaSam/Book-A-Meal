/* eslint consistent-return: 0 */

import jwt from 'jsonwebtoken';
import config from '../../config/config';

/**
 * 
 * @param {object} req Request object from user
 * @param {json} res Response object
 * @param {*} next Sends control to the next middleware
 */
const authorize = (req, res, next) => {

    const { token } = req.token;

    if(!token) {
        return res.status(401).json({
            status: 'Error',
            message: 'User not authenticated. No token provided'
        });
    }

    jwt.verify(token, config.secretKey, (decoded) => {
         req.user = decoded;        
    });

    next();
};

export default authorize;