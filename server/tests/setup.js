import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const user = {
  id:4,
  name:'Michael Doe',
  email:'michaeldoe@gmail.com',
  password:'$2a$10$4Wm6HHl9EMfd46UkP4pUEuiw2rHg.sgpuqIHtXi88nF.lr4JENvs2',
  userTypeId: 1

};


const jwtPayload = {
  id: user.id,
  userTypeId: user.userTypeId
};

const jwtData = {
  expiresIn: 86400
};

// const token = jwt.sign(jwtPayload, config.secretKey, jwtData);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlclR5cGVJZCI6MSwiaWF0IjoxNTI1ODk2MjA3LCJleHAiOjE1MjU5ODI2MDd9.bvVvk8V-3U94Moo17mXU3ZZ3cUybR6vgnPUJZ9Pdo-U";// jwt.sign(jwtPayload, config.secretKey, jwtData);
export default token;