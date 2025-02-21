/*
task2 : 
You are given an array say: [33. 50, 79. 78. 90, 101. 30 J. Now
return/get all the using
array.filter() method.
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
 */

const numbers = [43,50,66,42,60,30,100,17,93,57,63,90,122,34];
const newNumWhiceIsDivideByTEN = numbers.filter(num1 => num1 % 10 === 0)
// output: numbers array er upodan gulo moddee ji sonka gulo 10 diy bak jai segulo holo:  [ 50, 60, 30, 100, 90 ]
console.log(`numbers array er upodan gulo moddee ji sonka gulo 10 diy bak jai segulo holo: ` ,newNumWhiceIsDivideByTEN )

const twoArrayMerge = [...newNumWhiceIsDivideByTEN];
console.log(twoArrayMerge)
const big = newNumWhiceIsDivideByTEN.find(num1 => num1 );
console.log(big)