// element selectors = Methods used to target and manipulate HTML elements
//                     they allow you to select one or multiple HTML elements
//                     from the DOM (Document Dbject Model)

// 1. document.getElementById()            // ELEMENT OR NULL
// 2. document.getElementsByClassName()    // HTML COLLECTION
// 3. document.getElementsByTagName()      // html collection
// 4. document.querySelector()             // ELEMENT OR NULL
// 5. document.querySelectorAll()          // NODELIST
/*

const myHeading = document.getElementById("my-heading"); 

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


console.log(myHeading);
*/

// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);
// fruits[0].style.backgroundColor = "yellow";

/*
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
*/

//fruits.forEach() //will cause an error 
/*
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});
*/

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

//console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow";
/*
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor= "green";
}
*/
/*
Array.from(h4Elements).forEach(h4Element =>{
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement =>{
    liElement.style.backgroundColor = "green";
});
*/
/*
// query selector will return the first matching element
// const element = document.querySelector(".fruits"); //.fruits for the class
// const element = document.querySelector("h4"); //will select the first h4 
// const element = document.querySelector("li"); //will select the first li item
const element = document.querySelector("ul"); //will select the first ul list

element.style.backgroundColor = "yellow";
*/

// const foods = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "yellow"


// console.log(foods); // foods is a nodelist with built in forEach() method.

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});
