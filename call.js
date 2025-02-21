const person1 = {name:"tipu" , age:22};
const person2 = {name:'ssahillu' , age:20};

function dako() {
    console.log(`tar name holo ${this.name},and tar age holo ${this.age}`);
}

dako.call(person1);