
const instructor = [
    {name:'halbu' , age:28 , position:'senior'},
    {name:'kab' , age:23 , position:'junior'},
    {name:'jiju' , age:20 , position:'senior'},
];


const position =instructor.filter(object1kore => object1kore.position ==='senior');
/*  
[
  { name: 'halbu', age: 28, position: 'senior' },
  { name: 'jiju', age: 20, position: 'senior' }
]

*/
console.log(position)