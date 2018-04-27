import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';

chai.use(chaiHttp);


 describe('Get meals api route', (done) => {
    
    it('Returns a status code of 200 if meals are sucessfully gotten.', () => {
        chai.request('http://localhost:3000')
        .get('/api/v1/meals')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });

 });

 describe('Add a meal api route', (done) => {

    it('Returns a 201 response if meal is successful created', () => {
          
        chai.request('http://localhost:3000')
            .post('/api/v1/meals/')
            .send({
                name:'Beans and plantain',
                description:'A bucket of beans with plantain',
                price: 1200
            })
            .end((res,err) => {
                expect(res).to.have.status(201);
                expect(res).to.be.a('object');
                    done();
            });       
                 

    });

    it('Returns a 400 response if parameters are supplied incorrectly', (done) => {
        chai.request('http://localhost:3000')
            .post('/api/v1/meals/')
            .send({
                name:'Plantain',
                description: 'A really cool meal',
                price:1200
            })
            .end((res,err) => {
                expect(res).to.have.status(400);
                done();
            });

    });
 });

