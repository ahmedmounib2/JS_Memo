// string methods = allow you to manipulate and work with strings

let username = "JohnoSmith  "

console.log(username.charAt(0));


console.log(username.indexOf("o"));

console.log(username.lastIndexOf("o"));

console.log(username.length);

console.log(username);

username = username.trim(); // remove white space
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

username = username.repeat(3);
console.log(username);


let username1 = " Ahmed";

let result = username1.startsWith(" ");  

if(result){
    console.log("your username cant start with ' '");
}
else {
    console.log(username1);
}


let username2 = "Ahmed ";

let result1 = username2.endsWith(" ");  

if(result1){
    console.log("your username cant end with ' '");
}
else {
    console.log(username2);
}


let username3 = "John smith";

let result2 = username3.includes(" ");  

if(result2){
    console.log("your username cant include ' '");
}
else {
    console.log(username3);
}


let phoneNumber = "123-456-7890";

/*phoneNumber = phoneNumber.replaceAll("-", ""); // replace all dashes with no text
console.log(phoneNumber);*/
/*phoneNumber = phoneNumber.replaceAll("-", "/"); // replace all dashes with forward slash
console.log(phoneNumber);*/
/*phoneNumber = phoneNumber.padStart(15, "0"); // add 0 to the start of the string if the string until the string is 15 chars long
console.log(phoneNumber);  */
phoneNumber = phoneNumber.padEnd(15, "0"); // add 0 to the end of the string until the string is 15 chars long
console.log(phoneNumber);  


// string slicing = creating a substring from a portion of another string 

// string.slice(start, end)
/*
const fullName = "David Firth";

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 12);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1)

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/
/*

const fullName = "Sam Smith"

let firstName = fullName.slice(0, fullName.indexOf(" ")); // the end is the 1st space
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/

const email = "John23@gmail.com" // use slice to get the first part of the email as a username

let userName4 = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName4);
console.log(extension);
