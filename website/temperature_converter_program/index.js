// Ensure DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById("textBox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");
    let temp;
  
    function convert() {
      // Check if toFahrenheit is selected
      if (toFahrenheit.checked) {
        temp = Number(textBox.value); // Correct property is value, not Value
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F"; // Call toFixed method properly
      }
      // Check if toCelsius is selected
      else if (toCelsius.checked) {
        temp = Number(textBox.value); // Correct property is value, not Value
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "°C"; // Call toFixed method properly
      }
      // If no option is selected
      else {
        result.textContent = "Select a Unit";
      }
    }
  
    // Attach convert function to the button click event
    document.querySelector("button").onclick = convert;
  });
  