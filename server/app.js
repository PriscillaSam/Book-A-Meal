/* eslint no-console: 0 */
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes/index';
import errorHandler from './src/middleware/errorHandlers/errorHandler';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get all routes from index.js
app.use(routes);

app.use(errorHandler);

app.get('/', (req,res) => {
    res.status(200).send({
      message: 'Hello from Book-A-Meal'
    });
});


app.listen(port);
console.log(`server started on port ${port}`);

export default app;