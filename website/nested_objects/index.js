// nested objects = objects inside of other objects,
//                  allows you to represent more complex data structures
//                  child object is enclosed by a parent object

//                  person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    iStudent: true,
    hobbies: ["Karate", "jellyfishing", "cooking"],
    address: {
        street: "124 conch st.",
        city: "Bikini Bottom",
        country: "int. water"
    }
}


console.log(person.fullName);
console.log(person.age);
console.log(person.iStudent);
console.log(person.hobbies[0]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);


for(const property in person.address){
    console.log(person.address[property])
}
*/

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    
     
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 conch st", 
                                            "bikinibottom", 
                                            "intl. water");

const person2 = new Person("Patrick", 15, "128 conch st", 
                                            "bikinibottom", 
                                            "intl. water");
                                            

const person3 = new Person("Squidward", 55, "126 conch st", 
                                            "bikinibottom", 
                                            "intl. water");
                                            

console.log(person1.name);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);