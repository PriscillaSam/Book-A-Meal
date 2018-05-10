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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlclR5cGVJZCI6MSwiaWF0IjoxNTI1OTU4NjA5LCJleHAiOjE1MjYwNDUwMDl9.zesrrBSkxsSU5lmlOBNckqQ1VGymRUdp_p2oK2XO8jQ";// jwt.sign(jwtPayload, config.secretKey, jwtData);
export default token;