// const variable diye array declare korar porew array k khali korte caile evabe (array.length = 0/[]) evabe korte hob.
// +📌 এটি পুরো অ্যারেকে খালি করে, এবং অ্যারের রেফারেন্স থাকা সব জায়গায় পরিবর্তন হয়।
const numbrs = [1, 2, 2, 3];
numbrs.length = 0;// []
console.log(numbrs)//ouput: []

// 2:
let numbers = [2, 3, 4];
numbers = [];
console.log(numbers)// output : []  > evabew reassign kore array kali kora jai, but let/var diye declare korlei reassign kora jai.



// class declare korar system: 
// class holo ekta templete jeta diye shudo value pass kore multiple obj banano jai. reuse kora jai.
class Person {
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }

    greet() {
        console.log(`assalamu alaikum.my name is ${this.name} and i am ${this.age} old. and my roll is ${this.roll}`)
    }
}

// class er varaible 
const person1 = new Person('tipu', 22, 1)

person1.greet();// output: assalamu alaikum.my name is tipu and i am 22 old. and my roll is 1


class Vehicles  {
    constructor(brand, ceo, vehicles_type, price) {

        this.brand = brand;
        this.ceo = ceo;
        this.vehicles_type = vehicles_type;
        this.price = price;

    }

    watch(){
console.log(`the vehicle brand is: ${this.brand} and ${this.ceo}. &  vehicle name is: ${this.vehicles_type}. and price is ${this.price} `)
    }
}



const vehicle1 = new Vehicles("tesla " , "elon musk" , "cyber truck", "250kr");//the vehicle brand is: tesla  and elon musk. &  vehicle name is: cyber truck. and price is 250kr
const vehicle2 = new Vehicles ('')

vehicle1.watch();