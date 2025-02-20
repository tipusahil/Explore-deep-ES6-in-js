/*

3.filter(condition thakbe) :
> filter er modde condition thakbe , array er jei jei upodan gulo filter er sei condition er sate match kabe sei upodan gulo niye ekta notun array create korbe & segulo return korbe.jegulo condition er sate match kabena segulo bad pore jabe. & jodi array er kuno upodan filter er condtion er sate match na kai thle mt ekta array [] return korbe, ,suppose : filter er condtion jodi emn thake j 1-10 er modde jei sonka gulo jor sonka sei sonka gulo return kore dibe notun ekta array te. ar jodi jor sonka na thake taile mt array [] dibe.

4.find()  : find er moddew filter er moto ekta conditon thakbee. find er conditon er sate array er jei upodan  ta match kabe sei upodan ta return dibe, ar jodi ekadik upodan match kai tkn ekadik theke protom ta return krobe. ar jodi kuno ektaw match na kore thle undefined dibe.

filter * find  er modde partokko holo:
filter: jegulo condtion er sate match kabe sob gulo milai ekta notun array create koree sob gulo upodan(jegulo conditon er sate match ) kabe sob return dibe.eektaw match na kele mt[]array dibee.
find: jegulo upodan find er condition er sate match kabe segulo theke protom ta return dibe. ar jodi ektaw match na kai thle undefined dibe. & jodi shudo ekta match kai thle setai return dibee. 
filter match kawa sob gulo upodan return dibee.
find: match kawa sob gulo upodan theke protam  ta return dibee.
5.

*/

// example 1:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const newNumbersAfterFilter = numbers.filter(num => num % 2 !== 0);
//  newNumbersAfterFilter =   [ 1, 3, 5, 7 ]//ekane jegulo 2 diy bak korar poree baksesh 0 er soman hoini seei sonka gulo return korse. etai filter() method er kaj.& eta shudo array er uporee kora hoi.
console.log(newNumbersAfterFilter)

// example 2:
const friends = ['saho', 'sahil', 'safuan', 'abdullah', 'anas'];
const NewFriend = friends.filter(frnd => frnd.length % 2 === 0);
console.log(NewFriend)


// example 3:
const friends1 = ['saho', 'sahil', 'safuan', 'abdullah', 'anas'];
const NewFriend1 = friends1.filter(frnd => frnd.length % 2 === 0);
['saho', 'safuan', 'abdullah', 'anas']
console.log(NewFriend1)

// example 4:
// two dimensional array er maddome: 
// const players = [
//     ['tipu', 76],
//     ['sahil', 75],
//     ['saho', 55],
//     ['safo', 57],
// ]
const players12 = [
    ['tipu', 76],
    ['sahil', 99],
    ['saho', 95],
    ['safo', 97]
];

// প্রথমে সর্বোচ্চ রান বের করবো
const maxRun = Math.max(...players12.map(player => player[1]));

// এরপর filter() দিয়ে যে প্লেয়ার সর্বোচ্চ রান করেছে তাকে বের করবো
const topPlayer = players12.filter(player => player[1] === maxRun)[0];

console.log(`top runner player name is ${topPlayer[0]} & run is = ${topPlayer[1]}`);



// regular func diye :
function big(players) {

    let big_num = players[0][1];
    let bigP = players[0][0];
    console.log(big_num, bigP)

    for (let i = 0; i < players.length; i++) {
        if (players[i][1] > big_num) {
            big_num = players[i][1];
            bigP = players[i][0];
        }
    }

    return [bigP , big_num];

}

const players1 = [
    ['tipu', 76],
    ['sahil', 75],
    ['saho', 95],
    ['safo', 97],
]

const [bigRunner , theRun] = big(players1);
console.log(`top runner player name is ${bigRunner} & run is =${theRun}`);
//output: top runner player name is safo & run is =97