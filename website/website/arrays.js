let fruits = ["apple", "orange", "banana"];


fruits[3] = "coconut";
//fruits.push("coconut"); // add an element to the end of the array
//fruits.pop();//
//fruits.unshift("mango"); // add an element to the beginning of the array
//fruits.shift() // remove an element from the beginning og the array

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);*/

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango"); // searching for an element that doesnt exist will display -1


console.log(index);
/*
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}*/

/*
for(let i = fruits.length - 1; i > 0; i-- ){
    console.log(fruits[i]);
}*/

/*
for(let fruit of fruits){  // enhanced for loop 
    console.log(fruit);
}*/

fruits.sort(); // sort the array in alphabi. order
fruits.sort().reverse();