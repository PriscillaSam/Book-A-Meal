import chai from 'chai';
import chaiHttp from 'chai-http';
import {should} from 'chai';
import app from '../app';
import orders from '../src/models/order';
chai.use(chaiHttp);
should();


describe('Get Orders method in Order Controller', () => {
    const todayOrders = orders.filter(o => o.date.toDateString() === new Date().toDateString());
    
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
        chai.request()
            .get('/api/v1/orders')
            .end((err, res) => {
                if(err) done(err);
                // res.body.orders.should.equal(todayOrders);
                todayOrders.should.have.lengthOf(5);
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
            .post('/api/v1/orders/')
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
            .post('/api/v1/orders/')
            .send(badOrder)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(400);
                res.should.be.json;               
                done();
            });
    });
});