import meals from '../models/meal';


class Meal {

    static getMeals(req,res) {
        return res.json({
            meals
        });
    }    

}

export default Meal;