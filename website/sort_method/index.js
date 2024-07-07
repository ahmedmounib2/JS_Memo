// sort() = method used to sort elements of an array in place.
//          sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort();
console.log(numbers)

numbers.sort((a, b) => a - b);
console.log(numbers)

numbers.sort((a, b) => b - a); // for reverse order
console.log(numbers)


const people = [{name: "Spongebob", age: 30, gpa: 3.0, },
                {name: "Patrick", age: 37, gpa: 1.5,},
                {name: "Squidward", age: 51, gpa: 2.5,},
                {name: "Sandy", age: 27, gpa: 4.0,}]

people.sort((a,b) => a.age - b.age); // sort by age, young to old

console.log(people);

people.sort((a,b) => b.age - a.age); // sort by reverse order old to young

console.log(people);

people.sort((a,b) => b.gpa - a.gpa); // sort by highest gpa

console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name)); // sorting lexcographically by name

console.log(people);

people.sort((a,b) => b.name.localeCompare(a.name)); // sorting reverse lexcographically by name

console.log(people);