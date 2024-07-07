// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        Json files {key:value} or [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object
/*
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {"name" : "Spongebob", "age" : 30, "isEmployed" : true, "hobbies" : ["jellyfishing", "karate", "swimming"]};
const people = [{"name" : "Spongebob", "age" : 30, "isEmployed" : true}, 
                {"name" : "Patrick", "age" : 34, "isEmployed" : false},
                {"name" : "Squidward", "age" : 50, "isEmployed" : true},
                {"name" : "Sandy", "age" : 27, "isEmployed" : false}];


const JsonString = JSON.stringify(names);
const JsonPerson = JSON.stringify(person);
const JsonPeople = JSON.stringify(people);

console.log(JsonString);
//console.log(person);
console.log(JsonPerson);
console.log(JsonPeople);
*/

/*
const JsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const JsonPerson = `{"name" : "Spongebob", "age" : 30, "isEmployed" : true, "hobbies" : ["jellyfishing", "karate", "swimming"]}`;
const JsonPeople = `[{"name" : "Spongebob", "age" : 30, "isEmployed" : true}, 
                     {"name" : "Patrick", "age" : 34, "isEmployed" : false},
                     {"name" : "Squidward", "age" : 50, "isEmployed" : true},
                     {"name" : "Sandy", "age" : 27, "isEmployed" : false}]`;


const ParsedData = JSON.parse(JsonPeople);


console.log(ParsedData);
*/
/*
fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
*/

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error))