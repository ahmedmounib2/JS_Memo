// Error = An object that is created to represent a problem that occurs
//         Occur ofter with user input or establishing a connection

// try { } = encloses code that might potentially cause an error 
// catch { } = catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

/*
console.log(x);

console.log("You have reached the end");
*/
/*
try {
    console.log(x);
    // network error
    // promise rejection
    // security errors
}
catch(error){
    console.error(error)
}
finally{
    // close files 
    // close connections
    // release resources 
    console.log("This always executes")
}
console.log("You have reached the end");
*/

/*
try { 
    const dividend = Number(window.prompt(10));
    const divisor = Number(window.prompt(50));

    if (divisor == 0){
        throw new Error("You cant't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You have reached the end")
*/

// Import the readline module using ES module syntax
import readline from 'readline';

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get a number input from the user with a prompt message
function getNumber(prompt) {
    return new Promise((resolve, reject) => {
        // Ask the user for input
        rl.question(prompt, (input) => {
            // Convert the input to a number
            const number = Number(input);
            // Check if the input is a valid number
            if (isNaN(number)) {
                // If not, reject the promise with an error
                reject(new Error("Value must be a number"));
            } else {
                // Otherwise, resolve the promise with the number
                resolve(number);
            }
        });
    });
}

// Main function to handle the input and calculations
async function main() {
    try {
        // Get the dividend from the user
        const dividend = await getNumber("Enter the dividend: ");
        // Get the divisor from the user
        const divisor = await getNumber("Enter the divisor: ");

        // Check if the divisor is zero
        if (divisor == 0) {
            // If it is, throw an error
            throw new Error("You can't divide by 0");
        }

        // Calculate the result of the division
        const result = dividend / divisor;
        // Log the result to the console
        console.log(`Result: ${result}`);
    } catch (error) {
        // Catch any errors and log them to the console
        console.error(error);
    } finally {
        // The finally block always executes
        // Close the readline interface
        console.log("This always executes");
        rl.close();
    }
    console.log("You have reached the end");
}

main();
