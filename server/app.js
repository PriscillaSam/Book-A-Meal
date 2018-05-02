/* eslint no-console: 0 */
import express from "express";
import bodyParser from 'body-parser';
import mealRoutes from './src/routes/meal';
import orderRoutes from './src/routes/order';
import menuRoutes from './src/routes/menu';
import errorHandler from './src/middleware/errorHandlers/errorHandler';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/menu', menuRoutes);


app.use(errorHandler);

app.get('/', (req,res) => {
    res.status(200).send({
      message: 'Hello from Book-A-Meal'
    });
});


app.listen(port);
console.log(`server started on port ${port}`);

export default app;