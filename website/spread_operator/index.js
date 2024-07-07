// spread operator = ... allows an iterable such as an array or string 
//                      to be expanded into separatew elements
//                      (Unpack the elements)
/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);
*/
/*
let username = "John Smith";

let letters = [...username]

console.log(letters);
*/

/*
let username = "John Smith";

let letters = [...username].join("-"); // join the letters an add a dash after each character

console.log(letters);*/


let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits]; // making a copy of the array using spread operator
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // using the spread operator to combine arrays

console.log(foods);


