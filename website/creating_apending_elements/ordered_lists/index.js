// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem); // now its the 1st child
// document.getElementById("fruits").append(newListItem);  
// document.getElementById("fruits").prepend(newListItem); 
/*
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange); 
*/

/*
// if the list item dont have id
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);
*/

/*
document.getElementById("fruits").append(newListItem);  
document.getElementById("fruits").removeChild(newListItem);
*/
