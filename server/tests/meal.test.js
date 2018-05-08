import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';
import app from '../app';
import meals from '../src/models/dummyModels/meal';

chai.use(chaiHttp);

const mealUpdate = {
    name: 'Chicken',
    description: 'We love chicken'
};

const testMeal = {    
    name:'Spaghetti and salad',
    description: 'Fried spaghetti and crispy chicken',
    imgUrl: '../../img/plantain.jpg',
    price: 1500,
  
};
 describe('Get meals api route', () => {
    
    it('Returns a status code of 200 if meals are sucessfully gotten.', (done) => {
        chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
            if(err) done(err);
            expect(res).to.have.status(200);            
            done();
        });
    });

    it('Returns an object containing all meals', (done) => {
        chai.request(app)
            .get('/api/v1/meals')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.be.json;
                done();
            });
    });

 });

 describe('Add a meal api route', () => {

    it('Returns a 201 response if meal is successfully created', (done) => {
          
        chai.request(app)
            .post('/api/v1/meals/')
            .send(testMeal)
            .end((err,res) => {
                expect(res).to.have.status(201);
                expect(res).to.be.a('object');
                done();
            });       
                 

    });

    it('Returns a 400 response if insufficient parameters are supplied', (done) => {
        chai.request(app)
            .post('/api/v1/meals/')
            .send({
                description: 'A really cool meal',
                price:1200
            })
            .end((err,res) => {
                if(err) done(err);
                expect(res).to.have.status(400);
                done();
            });

    });
 
    it('Returns an error if meal already exists', (done) => {
        chai.request(app)
            .post('/api/v1/meals/')
            .send({
                name:'Spaghetti and salad',
                description:'A bucket of beans with plantain',
                price: 1200
            })
            .end((err,res) => {
                if(err) done(err);
                expect(res).to.have.status(400);
                done();
            });

    });
    
});

describe('Update a meal api route', () => {
   
     it('should return status 200 if meal is successfully updated', (done) => {
        chai.request(app)
            .put('/api/v1/meals/2')
            .send(mealUpdate)
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
                    if(err) done(err);
                    expect(res).to.have.status(404);
                    expect(res.body).to.be.deep.equal({
                        status: 'error',
                        message: 'this meal does not exist'
                    });
                    done();
                });
        });
 
});
 
describe('Delete a meal api route', () => {  
     
     it('Returns status code 200 if meal was successfully removed', (done) => {
        chai.request(app)
            .delete('/api/v1/meals/2')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.have.status(200);
                done();
            });
     });

    it('Returns an error message if meal cannot be found', (done) => {
        chai.request(app)
            .delete('/api/v1/meals/4')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.have.status(404);                
                done();
            });
     });


});

