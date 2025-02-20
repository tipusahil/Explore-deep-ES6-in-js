const person = [{ name: 'allah', isgot: true }];
console.log(person.name)//output: undefined
console.log(person)//output:    [ { name: 'allah', isgot: true } ]
console.log(person[0])//output:  { name: 'allah', isgot: true }
console.log(person[0].name);//output: allah
console.log(person[0].isgot);//output:  true


const productss = {
    stock: 200,
    data: [
        { id: 1, brand: "lenovo laptop", price: 65000, },
        { id: 2, brand: "mackbook ", price: 165000, },
    ]
    
}

console.log(productss)//output: full obj
console.log(productss.data);
/* [
  { id: 1, brand: 'lenovo laptop', price: 65000 },
  { id: 2, brand: 'mackbook ', price: 165000 }
] */

console.log(productss.data[1]);//output: { id: 2, brand: 'mackbook ', price: 165000 }
//  data name property te jei array ta as star modde 2ta obj ase, jheto array er data acess korte caile indx number diye accesss korte hoi tai index num diye access korte hoi.


console.log(productss.data[1].brand)//output: mackbook

console.log(productss.data[1].brand, productss.data[1].price)//mackbook  165000

// (productss.data[1].price) eije kuno ekta man dot/brackeet notetion diy accss korteci eta k muloto chain bole .tobe kuno ekta property jodi na take tkn jate error na dei tai (?) ei sign ta usee kora hoi.jate thakle samner dike agabe/acess korbe ar jodi oi name kuno property na thake tkn error dibena undefined dekabe.jmn:
console.log(productss.color?.brand);//ekane ? sinno er mane holo jodi productss nam obj er vitore color name property thake taile samne agab/dukb/access korbe ar jodi color name property na thake tkn undefined dekabe. jodi (?) na ditam tkn direect error dito , 

const nayok = {
    fasion: 'actor',
    income: '1lakh',

    address: {
        first:'chittagong kulshi',
        second:'kulshi 3no road',
        home_no: '15no home, cayanid',
    },

    city:"dhaka",

    her_movie_name:[
        { id: 1 , name:'tik tik' , cost:200500},
        { id: 2 , name:'bapparaj' , cost:200500},
    ]
  }

// console.log(nayok.income);
console.log(nayok.address.first);//output:  chittagong kulshi
console.log(nayok.her_movie_name[1].name);// output: bapparaj
console.log(nayok['address']['first'])//output: chittagong kulshi
console.log(nayok['her_movie_name'][0])//output: { id: 1, name: 'tik tik', cost: 200500 }

// node chaining.js

