// setTimeout() = function in JS that allows you to schedule 
//                the execution of a function after an amount of time (milliseconds)
//                times are approximayte (varies based on the workload of the JS runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers

/*
function sayHello(){
    window.alert("Hello");
}

//setTimeout(sayHello, 3000);

// Ananymous functions works as well

//setTimeout(function(){window.alert("good bye")}, 3000);

// setTimeout(() => window.alert("hellooo!"), 3000);


const timeout1 = setTimeout(() => window.alert("hellooo!"), 3000);

clearTimeout(timeout1);
*/

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("hello"), 3000);
    console.log("Started");
}

function stopTimer(){
    clearTimeout(timeoutId);
    console.log("cleared");
}