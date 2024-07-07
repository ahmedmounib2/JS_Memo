// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEvenetListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
// passing a function as a callback
/*
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😒"
}

myBox.addEventListener("click", changeColor);
*/

// passing an anonymous function as a callback
/*
myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😒";
});
*/

// passing an arrow function as a callback
/*
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😒";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 🫥";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me 😊";
});
*/


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 😒";
});

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 🫥";
});

myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me 😊";
});

