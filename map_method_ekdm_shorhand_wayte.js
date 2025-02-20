/* 
 map() method ta  loop er moto  kaj kore. kintu oldArray/oldObject er poriborton korena. ekta notun  newArray/newObject toiri kore. > map() method ta array kinba object er prottekta element/property ekta ekta koree access kore loop er moto
*/



// aro shortcut direct map() meethod er bracket er vitore arrow function create kore loop calai jmn: 


// syntex:
const array3 =[22,33,44,55];
const newArray3 = array3.map( num => num * 2); // (num => num* 2) etai holo function 
console.log(newArray3 , 'ekdm shorthand way te map() method use kore . newArray3 er output')


/* (num => num* 2) etai holo function ,normally ekta variable e arrow function lika hoi & sei variable name ta callback kore map(callbackfunction) map method er bracket eer vitore bosai dewa hoi, kintu ekane callback na kore direct arrow function ta map method er vitore lika hoise tai vairble e store korar drkr o hoini. */

