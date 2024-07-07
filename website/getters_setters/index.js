// getter = special method that makes a property readable 
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

/*
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    // setter
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.log(`Width must be a positive number`)
        }
    }

    set height(newHeighth){
        if(newHeighth > 0){
            this._height = newHeighth;
        }
        else{
            console.log(`Height must be a positive number`)
        }
    }

    // getters used here to read the data after setting it
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }

}

//const rectangle = new Rectangle(-1000000, "pizza")
const rectangle = new Rectangle(3, 4)

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

class Person{
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firsName = newFirstName;
        }
        else{
            console.log(`First name must be a non empty string`);
        }
    }

    set LastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.log(`Last name must be a non empty string`);
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log(`Age must be a non negative number`);
        }
    }

    get firstName(){
        return this._firsName;
    }

    
    get LastName(){
        return this._lastName;
    }

    
    get age(){
        return this._age;
    }

    get fullName(){
        return this._firsName + " " + this._lastName;
    }
}

//const person = new Person(420, 69, "pizza");

const person = new Person("Spongebob", "Squarepants", 30)


console.log(person.firstName);
console.log(person.LastName);
console.log(person.age);
console.log(person.fullName)