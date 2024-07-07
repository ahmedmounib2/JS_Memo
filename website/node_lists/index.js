// Node list = Static collection of HTML elements by (id, class, element)
//             can be created by using querySelectorAll()
//             Similar to an array, but no (map, filer, reduce)
//             NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButton");
/*
// ADD HTML/CSS PROPERTIES

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "😁"; 
});
*/
/*
// CLICK event listener
:
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});
*/
/*
// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(20, 100%, 40%)";
    });

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = ""; // Revert to default
    });
});
*/
/*
// ADD AN ELEMENT

const newButton = document.createElement("button"); // step 1 
newButton.textContent = "Button 5"; // step 2
newButton.classList = "myButton";
document.body.appendChild(newButton); // step 3

//console.log(buttons); // nodelist doesnt include button 5 as its a static collection that wont update automatically to reflect changes in the DOM

// manually adding button 5 to the nodelist
// reassigning buttons

buttons = document.querySelectorAll(".myButton");
console.log(buttons);
*/

// REMOVE AN ELEMENT
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        //console.log(buttons); // nodelist still have 4 buttons after removing the buttons
        buttons = document.querySelectorAll(".myButton"); // manually reassigning buttons, to update the nodelist and reflect changes to the DOM
    });
});


