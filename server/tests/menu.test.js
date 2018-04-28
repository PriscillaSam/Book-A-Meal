import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import {should} from 'chai';
import meals from '../src/models/meal';
import menus from '../src/models/menu';

chai.use(chaiHttp);
should();


describe('Set Menu in menu Controller', () => {

    const newMenu = {
        userId: 1,
        menuMeals: [ meals[0],meals[1] ],
        date: new Date()
    };

    it('Should return status 200 if menu is successfully set', (done) => {
        chai.request(app)
            .post('/api/v1/menu')
            .send(newMenu)
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(201);
                done();
            });


    });

    it('Should add the new menu to the menu list', (done) => {
        const menuLength = menus.length;
        chai.request(app)
            .post('/api/v1/menu')
            .send(newMenu)
            .end((err, res) => {
                if(err) done(err);
                menus.should.have.lengthOf(menuLength + 1);
                done();
            });
    });
});

describe('Get menu method in Menu Controller', () => {
    it('should return status of 200 if menu is successfully gotten', (done) => {
        chai.request(app)
            .get('/api/v1/menu/')
            .end((err, res) => {
                if(err) done(err);
                res.should.have.status(200);
                done();
            });

    });
});
