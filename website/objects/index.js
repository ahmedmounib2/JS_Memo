
// Introduction to Object Oriented Programming in JS
// object = A collection of related properties and/or methods can
//          represent real world ojects (people, products, places)
//          object = {key:value,
//          function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayhello: function(){console.log("Hi, ia Spogeob!")},
    eat: function(){console.log("I am eating a krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayhello: () => {console.log("Hi, i am Patrick...!")},
    eat: () => {console.log("I am eating roast beef, chicken, and pizza")},


}

person1.sayhello();
person2.sayhello();

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.eat();
person2.eat();