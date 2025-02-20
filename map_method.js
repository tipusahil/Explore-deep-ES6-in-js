/* 
 map() method ta  loop er moto  kaj kore. kintu oldArray/oldObject er poriborton korena. ekta notun  newArray/newObject toiri kore. > map() method ta array kinba object er prottekta element/property ekta ekta koree access kore loop er moto
*/


//1. callback function use korarr maddome ( array.map(functionNamWithOutBrackets) )  evabe function name dhore callback korar maddome map(callbackFunctionNamee) use kora hoi jmn: 

const oldArray = [1,2,3,4,5];

function regularFunc(x) {
    console.log("number now = ",x)
    return x*2;
}
const newArray1 = oldArray.map(regularFunc);// return kora valuE (newArray1)ei variablEE store hobe,& (oldArray) er man tik reke (newArray1) ta make hobe.
console.log(newArray1 , 'newArray1 er output') //output: [ 2, 4, 6, 8, 10 ] karon? map() method us korle notun kore ekta array creat hoi.
// const newArray = array.map()


// aro shorcut arrow function diy kora jai.

const oldArray2 = [12,13,14,15];
const double2 = x => x*2;//regular function er kaj ta ei 1line diye kora jai.
const newArray2 = oldArray2.map(double2);// newArray2 = [ 24, 26, 28, 30 ]  hobe.
console.log(newArray2)




/* 
const oldArray2 = [12,13,14,15];
const double2 = x => x*2; 

const newArray2 = oldArray2.map(double2); // newArray2 = [ 24, 26, 28, 30 ]  hobe.
ekane ( oldArray2.map(double2) ) (oldArray2)array theke prottekta element/value map() method er maddomee ekta ekta kore (double2) function ta callback korar maddome oi function (double2) e patabe, & sei sei function  giye  (oldArray2) array er prottekta element double hobe. hoye seta (newArray2) variable e storee korbee.  map(callback) map() method er maddome oi function ta totobar callback korbe jotota (oldArray2) value/element ase. map() method ta (for of) loop er moto  kaj kore. kintu oldArray er poriborton korena. map() method ta obj er uporo calano jai.
console.log(newArray2)

*/

// aro shortcut direct map() meethod er bracket er vitore arrow function create kore loop calai jmn: 
const array3 =[22,33,44,55];
const newArray3 = array3.map( num => num * 2); // (num => num* 2) etai holo function 
console.log(newArray3 , 'ekdm shorthand way te map() method use kore . newArray3 er output')
/* (num => num* 2) etai holo function ,normally ekta variable e arrow function lika hoi & sei variable name ta callback kore map(callbackfunction) map method er bracket eer vitore bosai dewa hoi, kintu ekane callback na kore direct arrow function ta map method er vitore lika hoise tai vairble e store korar drkr o hoini. */
















//### evabe double kora jai. array er prottekta element (for of) loop diy access kore seta k ekta notun array te double kore  push kora jai.
// const array = [1,2,3,4,5];
// const double =[]; //[ 2, 4, 6, 8, 10 ]

// for(const num of  array){
//     double.push(num*2);
// }
// console.log(double)
