/* eslint consistent-return: 0 */
import jwt from 'jsonwebtoken';
import config from '../../config/config';

    /**
     * Generates a json web token
     * @param {Object} user The registered or logged in user
     */
    const generateToken = (user) => {

        const {
            id,           
            userTypeId
        } = user;

        const jwtPayload = {
          id,          
          userTypeId
        };
        const secretKey = 'secret';
        const jwtData = {
            expiresIn: 86400
        };
    
        return jwt.sign(jwtPayload, secretKey, jwtData);        

    };

/**
 * 
 * @param {object} req Request object from user
 * @param {json} res Response object
 * @param {function} next Sends control to the next middleware
 */
const authorize = (req, res, next) => {

    try{
        const token = req.headers.authorization || req.body.token;
        if(!token) {
            return res.status(401).json({
                status: 'Error',
                message: 'User not authenticated. No token provided'
            });
        }
        const secretKey = 'secret';
        const decoded = jwt.verify(token, secretKey);
        req.decoded = decoded;  
        next(); 
    }
     catch(error) {
        return res.status(500).json({
            status: 'Error',
            message: 'This token is invalid'
        });
     }
    

};
/**
 * 
 * @param {integer} userTypeId 
 */
const checkUserType = (id) => (req, res, next) => {

    const { userTypeId } = req.decoded;
    if(userTypeId === id) next();
    else{
        return res.status(401).json({
            status: 'error',
            message:'You are not authorized to perform this action'
        });
    }
};


export default { generateToken, authorize, checkUserType };
