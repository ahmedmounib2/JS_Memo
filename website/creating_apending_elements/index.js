// ------------ Example 1 <h1> ------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);
//document.body.removeChild(newH1) to remove newH1 we just appended

// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
document.getElementById("box1").removeChild(newH1); // selecting the parent of the element 'box1', following it with .removeChild method and passing the element we need to remove.
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// if the elements dont have ids 
//const boxes = document.querySelectorAll(".box"); // use query select all to select anything with box class
//document.body.insertBefore(newH1, boxes[1]);


// REMOVE HTML ELEMENT
// document.body.removeChild(newH1) to remove newH1 we just appended
// document.getElementById("box1").removeChild(newH1);
