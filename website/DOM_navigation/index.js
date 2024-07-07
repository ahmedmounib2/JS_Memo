// DOM Navigation = The proces of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
/*
const element = document.getElementById("fruits");
const firstchild = element.firstElementChild;
firstchild.style.backgroundColor = "yellow";
*/
/*
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const firstchild = ulElement.firstElementChild;
    firstchild.style.backgroundColor = "yellow";
});
*/

// ---------- .lastElementChild ----------
/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";
*/
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
});
*/

// ---------- .nextElementSibling ----------
/*
//const element = document.getElementById("potatoes");
const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
*/

// ---------- .previousElementSibling ----------
/*
// const element = document.getElementById("desserts");
const element = document.getElementById("pie");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
*/
/*
// ---------- .parentElement ----------

const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

// ---------- .children ----------

const element = document.getElementById("desserts");
const children = element.children;

//console.log(children);
/*
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});
*/
children[1].style.backgroundColor = "yellow";