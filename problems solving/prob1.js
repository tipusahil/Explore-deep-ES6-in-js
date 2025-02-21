
/* 
 task1: 
you have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9,11
)
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8,10] Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

// ekta array er upodan gulo beejor takbe segulo jor jor sonkai convrt korte hobee, (for of) loop diye , for loop diye & map()meethod diyue:
*/

// 1. (for of) loop diye even sonkai convert: 
const arrayOfOdd = [1,3,5,7,9,11];
const newEvenArray =[];// beecome like this array >> [ 2, 4, 6, 8, 10, 12 ]
for(const odd1 of arrayOfOdd) {
   newEvenArray.push( odd1 +1);
}
console.log(newEvenArray)


// 2.for loop diye odd theke event array te convert: 
const odd22 = [11,13,15,17,19];

const newEvent22 = [];//[ 12, 14, 16, 18, 20 ]

for(let i = 0; i<odd22.length ; i++){

   let oneOdd = odd22[i]; 
   newEvent22.push(oneOdd + 1)//[ 12, 14, 16, 18, 20 ]
}
console.log(newEvent22)




// 3. map() method diye odd sonka theke event sonkai convert:
const odd11 = [1,3,5,7,9,11,13,15,17,19,21];
const newEventNum = odd11.map(od => od + 1 );// [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22]
console.log(newEventNum)