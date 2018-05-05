/* eslint consistent-return: 0 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/databaseModels';
import config from '../../config/config';

/**
 * @class User controller
 */
class UserController {
    
    /** 
     * Adds a new user to the database
     * @method createUser 
     * @param {object} request 
     * @param {object} response
     * @returns {object} newUser
     */
    static registerUser(req, res) {

        const {
            name,
            email,
            password,
            usertypeId
            } = req.body;

        const typeId = parseInt(usertypeId, 10);   
        const passHash = bcrypt.hashSync(password, 10);
        User.create({
            name,
            email,
            password: passHash,
            typeId
        })
        .then(newUser => { 
            const token = UserController.generateToken(newUser);
            res.status(201).json({
                    status: 'success',
                    message: `User with userId ${newUser.id} successfully created`,
                    token
                });
        
        });
    }

    /**
     * 
     * @param {object} req Request object containing user email and password
     * @param {json} res  Response object indicating if login is successful
     */
    static loginUser(req, res) {

        const { email, password } = req.body;

        User.findOne({
            where: { email }
        })
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    status: 'error',
                    message: 'failed to authenticate user'
                });
            }

            const userValid = bcrypt.compareSync(password, user.password);

            if(!userValid) {
                return res.status(401).json({
                    status: 'error',
                    message: 'failed to authenticate user'
                });
             
            }
            const token = UserController.generateToken(user);

            res.status(200).json({
                authorized: true,
                message:'User login successful',
                token
            });

         });


        
    }

    /**
     * Generates a json web token
     * @param {Object} user The registered or logged in user
     */
    static generateToken(user) {

        const {
            id,
            name,
            email,
            usertypeId
        } = user;

        const jwtPayload = {
          id,
          name,
          email,
          usertypeId
        };
    
        const jwtData = {
            expiresIn: 86400
        };
    
        return jwt.sign(jwtPayload, config.secretKey, jwtData);        

    }


}

export default UserController;