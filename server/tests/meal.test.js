import chai from 'chai';
import chaiHttp from 'chai-http';
import {expect} from 'chai';

chai.use(chaiHttp);


 describe('Meal Controller ', () => {
    
    it('should return a status code of 200 if meals are sucessfully gotten.', () => {
        chai.request('http://localhost:3000')
        .get('/api/v1/meals')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
    
 });

