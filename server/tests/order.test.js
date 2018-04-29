import chai from 'chai';
import chaiHttp from 'chai-http';
import {should} from 'chai';
import app from '../app';
import orders from '../src/models/order';
chai.use(chaiHttp);
should();


describe('Get Orders method in Order Controller', () => {
    const todayOrders = orders.filter(o => o.date.toTimeString() === new Date().toTimeString());
    
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
                res.body.todayOrders.should.equal(todayOrders);
                todayOrders.should.have.lengthOf(5);
                done();
            });
    });
});