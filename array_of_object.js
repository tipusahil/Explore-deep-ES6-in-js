const laptops = [
    {id:1 , name:'hp core i7' , price: 50000},
    {id:2 , name:'lenovo' , price: 35000},
    {id:3 , name:'macbook' , price: 140000},
    {id:4 , name:'dell' , price: 40000},
]
;
const  laptop_names = laptops.map(laptop => laptop.name );// [ 'hp core i7', 'lenovo', 'macbook', 'dell' ]
console.log(laptop_names)

// example of map() 2:
const laptopNameAndPrice = laptops.map(laptop => `laptop name =${laptop.name} and price is =${laptop.price}`);
console.log(laptopNameAndPrice);


// example of map() 3:
const laptop_price = laptops.map(laptop => laptop.price );//[ 50000, 35000, 140000, 40000 ]
console.log(laptop_price)


laptops.forEach(laptop1 => console.log(laptop1.name)); 
/*output:
 hp core i7
lenovo
macbook
dell

ekane forEach jeheto kisu return korena tai kuno varible declare kore then forEach calanor mane hoina karon oi variable e to kisu return korbnea. so outut pawa jabena tai direct arrayName.forEach() use kora hoi.kuno variable declare na kore.
forEach() method array er prottekta element er map er moto kaj kore .loop calanu hoi jei oparetion ta korte bola hoi setaa korbe kintu kisu return dibena. hardcoded vabe (return) keyword liklew return dibena.just arry er upodan er upore jeta korte bola hobe seta kore ghumai porbe.
*/


// example filter 4:
const expensive_laptop = laptops.filter(laptop => laptop.price >50000);// [ { id: 3, name: 'macbook', price: 140000 } ]
console.log(expensive_laptop)

// example filter 5:
const komDamiLaptop= laptops.filter(lap => lap.price <41000);
/* [
  { id: 2, name: 'lenovo', price: 35000 },
  { id: 4, name: 'dell', price: 40000 }
] */
console.log(komDamiLaptop)

const komDamirModdeProtomta = laptops.find(lap1kore => lap1kore.price <41000);// { id: 2, name: 'lenovo', price: 35000 }
console.log(komDamirModdeProtomta);


// examplee of reduce() 6:
const total = laptops.reduce( (accum,current) => accum + current.price , 0);
console.log(total)// 265000