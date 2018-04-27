import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';
import app from '../app';

chai.use(chaiHttp);

 describe('Meal Controller ', () => {
    
    it('should return a status code of 200 if meals are sucessfully gotten.', (done) => {
        chai.request('http://localhost:3000')
        .get('/api/v1/meals')
        .end((err, res) => {
            expect(res.body).to.be.a('array');
            expect(res).to.have.status(200);
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
        description: 'we love chicken',
        price: 1500
    };

     it('should update an existing meal in the database', (done) => {
        chai.request(app)
            .put('/api/v1/meals/1')
            .send({
                mealUpdate
            })
            .end(res => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal({
                    updatedMeal,
                    success: 'true',
                    message: 'meal successfully updated',
                });
                done();
            });
     });

     it('should return an error 404 if the meal is not found', (done) => {
        chai.request(app)
            .put('/api/v1/meals/5')
            .send(mealUpdate)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.equal({
                    success: 'false',
                    message: 'this meal does not exist'
                });
                done();

            });
     });
 });

