const numbers = [1,4,5,5,5];
const newNum = numbers.reduce((pera1, pera2) => pera1 + pera2);
//    newNum = 20
console.log(newNum);

/* 
// reduce() method er ketre 2ta peramitar lage.
array er prottekta element k er jei oparetion ta  korte bola hobe seta kore total result ta return kore , kuno notun array create korbena.karon prottekta element er total result ta dekabe.element dekabena.tai,just array er element gulor protom elment theke shuro kore ekdm sesh element obdi sobgulote oparetion calai total result  return kore. */

// example 2:
const numbers1 = [2,3,4,5];
const total1 =numbers1.reduce((x , y) => x*y , 0);//ekanee 0 ta hocce initial value
//    total1 = 120
console.log(total1)


const friends = [20,20,20];
// const totalResult = friends.reduce(( a , b) => a.length === b.length);// =false
const totalResult = friends.reduce(( a , b) => a + b , 0);// = 60
console.log(totalResult)