import chai from 'chai';
import chaiHttp from 'chai-http';
import {should} from 'chai';
import app from '../app';
import { Order } from '../src/models/databaseModels';
import models from '../src/models/databaseModels/index';
import token from './setup';

chai.use(chaiHttp);
should();
const orderRoute = 'api/v1/orders/';


describe('Get Orders method in Order Controller', () => {
    const todayOrders = orders.filter(o => o.date === '2018-3-14');    
    it('should return status 200 if orders are successfully gotten', (done) => {
        chai.request(app)
            .get('/api/v1/orders')
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(200);
                done();
            });

    });

    it('should return an array of orders for today', (done) => {
        chai.request(app)
            .get('/api/v1/orders')
            .end((err, res) => {
                if(err) done(err);
                res.body.todayOrders.should.have.lengthOf(4);        
                todayOrders.should.have.lengthOf(4);
                done();
            });
    });

});

describe('Make Order method in order controller', () => {
    const badOrder = {          
        quantity: 2,
        amount: 4000,
    };

    const goodOrder = {
        userId:1,
        mealId: 2,
        quantity:3,
        amount: 5000
    };

    it('Returns status 201 if order is successful', (done) => {
        chai.request(app)
            .post(orderRoute)
            .send(goodOrder)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(201); 
                res.should.be.json;               
                done();
            });
    });

    it('Returns status code 400 if parameters are supplied incorrectly', (done) => {
        chai.request(app)
            .post(orderRoute)
            .send(badOrder)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(400);
                res.should.be.json;               
                done();
            });
    });

    it('Returns an error message if user does not exist', (done) => {

        chai.request(app)
            .post(orderRoute)
            .set('authorization', token)
            .send({
                userId:3,
                mealId: 2,
                quantity:3,
                amount: 5000
            })
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(404);
                res.body.should.deep.equal({
                    status: 'Error',
                    message: 'This user does not exist'
                });
                res.body.should.be.an('object');
                res.body.status.should.e
            })
    });
});

describe('Update Order method of the order controller', () => {
    const order = {
        userId:1,
        mealId:2,
        quantity: 2,
        amount: 4000,
    };

    it('Returns status code 404 if order does not esist', (done) => {

        chai.request(app)
            .put('/api/v1/orders/10')
            .send(order)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(404);
                res.body.should.deep.equal({
                    status: 'error',
                    message:'this order does not exist'
                });
                done();
            });
    });

    it('Returns status code 200 if order is successfully updated', (done) => {
        chai.request(app)
            .put('/api/v1/orders/1')
            .send(order)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(200);
                done();
            });
    }); 
});
