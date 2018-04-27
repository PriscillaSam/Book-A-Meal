import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';
import app from '../app';

chai.use(chaiHttp);

import meals from '../src/models/meal';

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

 describe('Update a meal api route', () => {

    const mealUpdate = {
        name: 'Chicken',
        description: 'We love chicken'
    };

    const updatedMeal = {
        mealId:1,
        name:'Chicken',
        description: 'We love chicken',
        price: 1500
    };

     it('should update an existing meal in the database', (done) => {
        chai.request(app)
            .put('/api/v1/meals/1')
            .send(mealUpdate)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.deep.equal({
                    updatedMeal,
                    success: 'true',
                    message: 'meal successfully updated',
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

     it('should return an error 404 if the meal is not found', (done) => {
        chai.request(app)
            .put('/api/v1/meals/5')
            .send(mealUpdate)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.be.deep.equal({
                    success: 'false',
                    message: 'this meal does not exist'
                });
                done();


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

