import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import {should} from 'chai';
import { Menu, Meal} from '../src/models/databaseModels';
import models from '../src/models/databaseModels/index';

chai.use(chaiHttp);
should();

// before((done) => {
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

const testMenu = {
    date: new Date(),
    mealIds: [1,2,3]
};
describe('Get menu method in Menu Controller', () => {

        it('Returns an error 404 if menu has not been set', (done) => {
            chai.request(app)
                .get('/api/v1/menus')
                .end((err, res) => {
                    if(err) done(err);
                    res.should.have.status(404);
                    res.body.should.deep.equals({
                        status: 'no content',
                        message: 'no menu yet for today'
                    });
                    done();
                });
    
        });
           
        it('Should return status 200 if menu is successfully set', (done) => {
            chai.request(app)
                .post('/api/v1/menus')
                .send(testMenu)
                .end((err, res) => {
                    if(err) done(err);
                    res.should.have.status(201);
                    done();
                });
            });

       

        it('should return status of 200 if menu is successfully gotten', (done) => {
            chai.request(app)
                .get('/api/v1/menus/')
                .end((err, res) => {
                    if(err) done(err);
                    res.should.have.status(200);
                    res.should.be.json;
                    done();
                });
    
        });
    
});
  
describe('POST api/v1/menus',  () => {  

    it('Should return an error when a menu already exists', (done) => {
        chai.request(app)
            .post('/api/v1/menus')
            .send(testMenu)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(400);
                res.body.should.deep.equals({
                    status:'error',
                    message:'A menu already exists for today'
                });
                done();

            });
    });
});