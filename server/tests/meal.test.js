import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';
import app from '../app';
import meals from '../src/models/meal';

chai.use(chaiHttp);


 describe('Get all meals ', () => {
    
    it('should return a status code of 200 if meals are sucessfully gotten.', (done) => {
        chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
            expect(res).to.have.status(200);            
            done();
        });
    });

    it('should return an array of meals', (done) => {
        chai.request(app)
            .get('/ap1/v1/meals')
            .end((err,res) => {
                if(err) done(err);
                expect(res.body).to.equal({meals});
                done();
            });
    });
    
 });

 describe('Delete a meal option', () => {
     const deletedMeal = meals.find(m => m.mealId == 1);
     it('Should return status code 200 if meal was successfully removed', (done) => {
        chai.request(app)
            .delete('/api/v1/meals/2')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.have.status(200);
                done();
            });
     });

     it('should return the removed meal', (done) => {
         chai.request(app)
            .delete('/api/v1/meals/1')
            .end((err,res) => {
                if(err) done(err);               
                expect(res.body).to.have.an('array');
                done();
            });
     });
 });

