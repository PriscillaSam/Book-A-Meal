import meals from './meal';

const menus = [
    {
        menuId: 1,
        userId: 1,
        menuMeals: [ meals[0],meals[1] ],
        date: '2018-4-30',
    },
    {
        menuId: 2,
        userId: 1,
        menuMeals: [...meals],
        date: '2018-5-1',
    },
    {
        menuId: 3,
        userId: 2,
        menuMeals: [meals[1],meals[0]],
        date: '2018-4-28',
    },
    {
        menuId: 4,
        userId: 2,
        menuMeals: [meals[1],meals[0], meals[2]],
        date: '2018-3-28',
    }
];

export default menus;