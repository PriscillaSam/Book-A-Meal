/* eslint consistent-return: 0 */

import bcrypt from 'bcryptjs';
import { User, UserType } from '../models/databaseModels';
import { generateToken } from '../middleware/authorize';

/**
 * @exports
 * @class User controller
 */
class UserController {
    
    /** 
     * Registers a new user in the system
     * @method createUser 
     * @param {object} req 
     * @param {object} res
     * @returns {object} newUser
     */
    static async registerUser(req, res) {
        
        try{

            const {
                name,
                email,
                password,
                userTypeId
                } = req.body;
                
            // check usertypeId
            const userType = await UserType.findOne({ where: {id: userTypeId}});   
            if(!userType) {
                return res.status(404).json({
                    status: 'Error',
                    message: 'Ooops!!! This usertype does not exist'
                });
            }
            const userExists = await UserController.checkUserExists(email, res);

            if(userExists) {
                return res.status(409).json({
                    status: 'error',
                    message: 'this user already exists'
                });
            }
    
            const typeId = parseInt(userTypeId, 10);   
            const passHash = bcrypt.hashSync(password, 10);
            const newUser = await User.create({
                                        name,
                                        email,
                                        password: passHash,
                                        userTypeId: typeId
                                    });
                      
            const token = generateToken(newUser);
            res.status(201).json({
                    status: 'success',
                    message: `Hello ${newUser.name}. Welcome to Book-A-Meal. Your account has been created.`,                    
                    token
                });

        } catch(error)  {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        
        }
    }

    /**
     * Performs Login operation
     * @param {object} req Request object containing user email and password
     * @param {json} res  Response object indicating whether login is successful or not
     */
    static async loginUser(req, res) {

        try{
            const { email, password } = req.body;

            const user = await UserController.checkUserExists(email, res);

            if(!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Sorry, we can\'t find you. You need to sign up first'
                });
            }            
                
            const isUserValid = bcrypt.compareSync(password, user.password);
    
            if(!isUserValid) {
                return res.status(401).json({
                    status: 'error',
                    message: 'failed to authenticate user'
                });
                
            }
            const token = generateToken(user);

            res.status(200).json({
                authenticated: true,
                message:'User login successful',
                token
            });    
            
        } catch(error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }      

        
    }


    /**
     * checks if user already exists via email
     * @param {string} email  user email 
     * @param {object} res Response object
     * @param {function} next function that calls next middleware down the chain
     */
     static async checkUserExists  (email, res, next ) {      
        
            try{
                const user = await User.findOne({
                    where: {
                        email
                    }
                });
                
                return user;
            } catch(error){
                next(error);
            }     
      
    }


}

export default UserController;