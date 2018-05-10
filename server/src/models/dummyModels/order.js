import meals from './meal';
import users from './user';

const orders = [

    {
        orderId: 1,
        user: users[0],
        meal: meals[0],
        quantity: 3,
        amount: 4500,       
        date: '2018-3-14'
    },

    {
        orderId: 2,
        user:users[1],
        meal:meals[1],
        quantity: 2,
        amount: 4000,
        date: '2018-2-24'
 
    },
    {
        orderId: 3,
        user:users[2],
        meal:meals[2],
        quantity: 3,
        amount: 4500, 
        date: '2018-4-17'

    },
    {
        orderId: 4,
        user:users[2],
        meal:meals[2],
        quantity: 3,
        amount: 4500, 
        date: '2018-3-14'
    },    
    {
        orderId: 5,
        user:users[1],
        meal:meals[2],
        quantity: 3,
        amount: 4500, 
        date: '2018-3-14'

    },    
    {
        orderId: 6,
        user:users[0],
        meal:meals[2],
        quantity: 3,
        amount: 4500,
        date: '2018-3-14'
 
    },    
    {
        orderId: 7,
        user:users[2],
        meal:meals[2],
        quantity: 3,
        amount: 4500,
        date: '2018-4-29'
 
    },    
    {
        orderId: 8,
        user:users[2],
        meal:meals[2],
        quantity: 3,
        amount: 4500, 
        date: '2018-4-29'

    },
];

export default orders;
