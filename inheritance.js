// ইনহেরিটেন্স কি?
// 👉 এক class থেকে অন্য class এর ফিচার গ্রহণ করাকে ইনহেরিটেন্স বলে।

// 🔹 উদাহরণ:


class Students {
    constructor(name){
        this.name= name;
    }

    say_name(){
        console.log(`my name is ${this.name}`);
    }
}

// ekn arekta obj make korbo.
// inheritace syntex:
class Student1 extends Students {
    feelings() {
        console.log(`yes i'am happy`);
    }
}


const student1 = new Students ('abdullah');//my name is abdullah
student1.say_name();
student1.feelings();



// 📌 Dog ক্লাস Animal ক্লাস থেকে ইনহেরিট করেছে, তাই makeSound() মেথডও পেয়ে গেছে।



/* class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal sound...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

const dog = new Dog("Tommy");
dog.makeSound(); // Animal sound...
dog.bark(); // Woof woof!
*/