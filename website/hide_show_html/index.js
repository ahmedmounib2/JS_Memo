// Selecting the button and image elements
// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");
/*
// Adding event listener to the button for click event
myButton.addEventListener("click", event  => {
    // Checking the current display state of the image
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
         // Update button text

    } else {
        // If currently visible, hide the image
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show"; // Update button text
    }
});
*/

/*
// Ensure the image is initially visible
myImg.style.display = "block";

// Adding event listener to the button for click event
myButton.addEventListener("click", () => {
    // Checking the current display state of the image
    if (myImg.style.display === "none") {
        // If hidden, show the image
        myImg.style.display = "block";
        myButton.textContent = "Hide"; // Update button text
    } else {
        // If currently visible, hide the image
        myImg.style.display = "none";
        myButton.textContent = "Show"; // Update button text
    }
});
*/
/*
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting the button and image elements
    const myButton = document.getElementById("myButton");
    const myImg = document.getElementById("myImg");
  
    // Ensure the image is initially visible
    myImg.style.display = "block";
  
    // Adding event listener to the button for click event
    myButton.addEventListener("click", () => {
      // Checking the current display state of the image
      if (myImg.style.display === "none") {
        // If hidden, show the image
        myImg.style.display = "block";
        myButton.textContent = "Hide"; // Update button text
      } else {
        // If currently visible, hide the image
        myImg.style.display = "none";
        myButton.textContent = "Show"; // Update button text
      }
    });
  });
*/


document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting the button and image elements
    const myButton = document.getElementById("myButton");
    const myImg = document.getElementById("myImg");
  
    // Ensure the image is initially visible
    myImg.style.visibility = "hidden";
  
    // Adding event listener to the button for click event
    myButton.addEventListener("click", () => {
      // Checking the current visibility state of the image
      if (myImg.style.visibility === "hidden") {
        // If hidden, show the image
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide"; // Update button text
      } else {
        // If currently visible, hide the image
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show"; // Update button text
      }
    });
  });
  

