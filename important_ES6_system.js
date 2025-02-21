// const variable diye array declare korar porew array k khali korte caile evabe (array.length = 0/[]) evabe korte hob.
// +📌 এটি পুরো অ্যারেকে খালি করে, এবং অ্যারের রেফারেন্স থাকা সব জায়গায় পরিবর্তন হয়।
const numbrs = [1, 2, 2, 3];
numbrs.length = 0;// []
console.log(numbrs)//ouput: []

// 2:
let numbers = [2, 3, 4];
numbers = [];
console.log(numbers)// output : []  > evabew reassign kore array kali kora jai, but let/var diye declare korlei reassign kora jai.


