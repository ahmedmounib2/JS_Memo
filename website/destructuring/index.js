// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] to perform array destructuring
//                 {} to perform object destructuring

// ---------------- EXAMPLE 1 ----------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a);
console.log(b);

// ---------------- EXAMPLE 2 ----------------
// SWAP TWO ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// ---------------- EXAMPLE 3 ----------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const color = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extracolors] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extracolors);


// ---------------- EXAMPLE 4 ----------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 34,
}

const{firstName, lastName, age, job="unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// ---------------- EXAMPLE 5 ----------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}


const person3 = {
    firstName: "Jean-Pierre",
    lastName: "Papin",
    age: 45,
    job: "Waiter",
}

const person4 = {
    firstName: "Andrea",
    lastName: "Bocelli",
    age: 65,
}

displayPerson(person3);
displayPerson(person4);