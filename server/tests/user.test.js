import chai from 'chai';
import chaiHttp from 'chai-http';
import { should } from 'chai';
import app from '../app';
import models from '../src/models/databaseModels/index';

chai.use(chaiHttp);
should();



// afterAll((done) => {
//     models.sequelize.sync({
//         force: true
//     })
//     .then(() => {
//         done(null);
//     })
//     .catch((error)  => {
//         done(error);
//     });
// });

const testUser = {
    name: 'Priscilla',
    email: 'priscy@gmail.com',
    password: 'password',
    userTypeId: 1
};
describe('Sign up method of UserController', () => {
    it('Returns status 201 if user is registered', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(testUser)
            .end((err, res) => {
                console.log(res.body);
                // 
                // if(err) done(err);
                res.should.have.status(201);
                done();
            });
    });

    it('Returns an error 400 if user already exists ', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(testUser)
            .end((err, res) => {
                //  if(err) done(err);
                // res.should.have.status(409);
                res.body.should.deep.equals({
                    status: 'error',
                    message: 'this user already exists'
                });
                done();
            });
    });
});