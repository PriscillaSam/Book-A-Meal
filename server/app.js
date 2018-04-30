import express from "express";
import bodyParser from 'body-parser';
import routes from './src/routes/index';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

app.get('/', (req,res) => {
    res.status(200).send({
      message: 'Hello from Book-A-Meal'
    });
});


export default app;