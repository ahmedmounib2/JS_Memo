const fruits = [{name: "apple", color: "Red", calories: 95},
               {name: "orange", color: "Orange", calories: 45},
               {name: "banana", color: "Yellow", calories: 105},
               {name: "coconut", color: "white", calories: 159},
               {name: "pineapple", color: "Yellow", calories: 57}];

/*
console.log(fruits[0].name);
console.log(fruits[0].colories);


fruits.push({name: "grapes", color: "purple", colories: 210});

console.log(fruits);

fruits.pop();
console.log(fruits);


fruits.splice(1, 2);
console.log(fruits);

// -------- forEach() --------

fruits.forEach(fruit => console.log(fruit.color));

// -------- map() --------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);
*/
// -------- filter() --------

const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);


console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);


// -------- reduce() --------

const maxFruit = fruits.reduce( (max, fruit) =>
                                 fruit.calories > max.calories ?
                                 fruit : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                 fruit.calories < min.calories ?
                                 fruit : min);

console.log(maxFruit);
console.log(minFruit);