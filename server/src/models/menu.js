import meals from './meal';

const menus = [
    {
        menuId: 1,
        userId: 1,
        menuMeals: [ meals[0],meals[1] ],
        date: new Date(2017,12,1),
    },
    {
        menuId: 2,
        userId: 1,
        menuMeals: [...meals],
        date: new Date(2017,11,23),
    },
    {
        menuId: 3,
        userId: 2,
        menuMeals: [meals[1],meals[0]],
        date: new Date(2017,12,22),
    }
];

export default menus;