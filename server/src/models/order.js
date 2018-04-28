import meals from './meal';

const orders = [

    {
        orderId: 1,
        userId: 1,
        meal: meals[0],
        quantity: 3,
        amount: 4500,       

    },

    {
        orderId: 2,
        userId: 1,
        meal:meals[1],
        quantity: 2,
        amount: 4000, 
    },
    {
        orderId: 3,
        userId: 2,
        meal:meals[2],
        quantity: 3,
        amount: 4500, 
    }
];

export default orders;
