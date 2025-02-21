// task4 

const people = [
    {name:'abdullah', age:25},
    {name:'rayan', age:20},
    {name:'hisbullah', age:15},
];

const totalofPeopleAges = people.reduce( ( obj1_er_Age, obj_EktaKore) => obj1_er_Age + obj_EktaKore.age ,0 );// output: 60
console.log(totalofPeopleAges)

// reduce() method er kaj ta  for loop diye kortm age: onk line code lika lagto ,:

const people1 = [
    {name:'abdullah', age:30},
    {name:'rayan', age:20},
    {name:'hisbullah', age:15},
];

