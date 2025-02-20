/* 2. forEach() method use kora hoi array er upodan er jonno 
map() & forEach() er kaj prai same partokko holo:

map :  array er upodan er upor jei oparation ta  korte bola hobe seta kore notun ekta array er maddome oparetion howa upodan gulo return dibe.

forEach: etaw map er moto same kaj kore.shudo return dibena bakisob map er moto kaj korbe. array er upodan er upor jei oparetion ta korte bola hobe seta kore ghumai thakbee. return dibena , etai holo forEach er kaj.
*/

const numbers = [1,2,3,4];
const newNumbers = numbers.forEach(num => console.log(num * 2 ));//output: 2 4 6 8

// const newNumbers = numbers.forEach(num => num* 2);
// console.log(newNumbers)//undefined .karon? forEach return korena.

// example 2:
const array = [2,4,6,8,10];
const x = array.forEach(arr => {
  return  arr +1;//evabe hardcoded vabe return keyword likew forEach() method er ketre kaj hobna.
})
console.log(x)//output: undefined


// example 3:
const array1 = [1,2,3,4];

const newArr2 =[];

const y= array1.forEach(ar1 => newArr2.push(ar1 +1) );
// return pawa jaina tai push er maddome oparation kora array er upodan gulo onno ekta mt array te push kore dile tkn abr output pawa jabe sei notun array theke. so (forEach) method ta push korse tiki kintu return koreni kisui
console.log(newArr2)