import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/tag';

export const sample_foods: Food[] = [
    {
        id:'1',
        name:'Pizza Pepperoni',
cookTime:'10-20',
price:10,
favorite:false,
origins:['italy'],
stars: 4.5,
imageUrl: 'assets/pizza-2776188.jpg',
tags: ['FastFood','Pizza', 'Lunch'],
    },
    {
        id:'2',
        name:'Meatball',
cookTime:'20-30',
price:20,
favorite:true,
origins:['italy'],
stars: 4.7,
imageUrl: 'assets/manchurian-7025656.jpg',
tags: ['SlowFood', 'Lunch'],
    },
    {
        id:'3',
        name:'Hamburger',
cookTime:'10-15',
price:5,
favorite:false,
origins:['germany','us'],
stars: 3.5,
imageUrl: 'assets/hamburger-1238246.jpg',
tags: ['FastFood','Hamburger'],
    },
    {
        id:'4',
        name:'Fried Patatoes',
cookTime:'15-20',
price:2,
favorite:true,
origins:['belgium','france'],
stars: 3.3,
imageUrl: 'assets/fast-food-1839052.jpg',
tags: ['FastFood','Fry'],
    },
    {
        id:'5',
        name:'Chicken Soup',
cookTime:'40-50',
price:11,
favorite:false,
origins:['india','asia'],
stars: 3.0,
imageUrl: 'assets/potato-soup-2152254.jpg',
tags: ['SlowFood','Soup'],
    },
    {
        id:'6',
        name:'Vegitable Pizza',
cookTime:'40-50',
price:9,
favorite:false,
origins:['italy'],
stars: 4.0,
imageUrl: 'assets/pizza-5179939.jpg',
tags: ['FastFood','Pizza', 'Lunch'],
    },
]
export const sample_tags:any=[
  {name: 'All', count:6},
  {name:'FastFood',count:4},
  {name:'Pizza', count:2},
  {name: 'Lunch',count:3},
  {name: 'SlowFood',count:2},
  {name:'Hamburger', count:1},
  {name: 'Fry', count:1},
  {name: 'Soup', count:1}  
]