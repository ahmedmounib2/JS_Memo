// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        persone.name = this.name
//   doesn't work with arrow functions


const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
};

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
};

person1.sayHello();
person1.eat();
person2.eat();

