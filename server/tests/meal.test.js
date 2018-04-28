import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';
import app from '../app';
import meals from '../src/models/meal';


chai.use(chaiHttp);

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
                expect(res.body).to.deep.equal({
                    meals,
                    message:'meals successfully gotten'
                });
                done();
            });
    });
    
});

describe('Update a meal api route', () => {
   
     it('should return status 200 if meal is successfully updated', (done) => {
        chai.request(app)
            .put('/api/v1/meals/1')
            .send(mealUpdate)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });

        });
 
});
 
describe('Delete a meal option', () => {
     const deletedMeal = {
        mealId:2,
        name:'Spaghetti and salad',
        description: 'Fried spaghetti and crispy chicken',
        imgUrl: '../../img/plantain.jpg',
        price: 1500
    };
     
     it('Should return status code 200 if meal was successfully removed', (done) => {
        chai.request(app)
            .delete('/api/v1/meals/1')
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
            });
        });

     it('should return the removed meal', (done) => {
         chai.request(app)
            .delete('/api/v1/meals/2')
            .end((err,res) => {
                if(err) done(err);               
                expect(res.body).to.equal({
                    removedMeal:deletedMeal,
                    success:'true',
                    message:'meal successfully removed'
                });
                done();
            });
     });
});

