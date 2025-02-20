
// example 1:
const oldArray = [1,2,3,4];
const newArray = oldArray.map( a => a * 2);
//    newArray = [ 2, 4, 6, 8 ]
console.log(newArray,'array er element gulo prottekta 2diye gon korar pore newArr')


// example 2:
const numbers = [ 1, 2, 3, 4 ];
const newNumber = numbers.map(num1kore => num1kore * 2);
//    newNumber = [ 2, 4, 6, 8 ]
console.log(newNumber)




// example 3:
const oldArray3 = [5,6,7,8];
const newArray3 = oldArray3.map( one_element => one_element * one_element);
//    newArray3 = [ 25, 36, 49, 64 ]
console.log(newArray3)

// example 4:
const oldArrays = [10,20,30,40];
const newArrays = oldArrays.map( peramitar1 => peramitar1 * 2 );
//   newArrays  = [ 20, 40, 60, 80 ]
console.log(newArrays);


// example 5:
const numbersArr = [2,4,6,8];
const newNumberArr = numbersArr.map( num => num + 1 );
//    newNumberArr = [ 3, 5, 7, 9 ]
console.log(newNumberArr)


// example 6:
const friends =['abdullah' , 'ratul' ,'mustafa' , 'sahoshi']
const newFriends = friends.map(frnd => frnd + " khan");
//    newFriends = [ 'abdullah khan', 'ratul khan', 'mustafa khan', 'sahoshi khan' ]
console.log(newFriends)

// example 7:
const friendsS = ['saho' , 'sahil' , 'safuan' ,'abdullah' , 'anas'];
const friendNameLength = friendsS.map( friend => `(${friend}) name tar length holo =${friend.length}`);

/*
[
  '(saho) name tar length holo =4',
  '(sahil) name tar length holo =5',
  '(safuan) name tar length holo =6',
  '(abdullah) name tar length holo =8',
  '(anas) name tar length holo =4'
]
 */
console.log(friendNameLength)


// example 8:
const namees =  ['saho' , 'sahil' , 'safuan' ,'abdullah' , 'anas'];
const firstLetter = namees.map(nam => nam[0])//shudo first letteer caile.
//    firstLetter = [ 's', 's', 's', 'a', 'a' ]
console.log(firstLetter)

// object e map() method use:
// example 9:
// const student = {name:'tipu' , age:22 , roll: 1};
// const newStudent = student.map(student => student.age *2 );
// console.log(newStudent);



// const student1 = {name:'sahil' , age:4 , roll: 11};
// const student2 = {name:'ratul' , age:12 , roll: 21};
// const student3 = {name:'sultan' , age:232 , roll: 31};