// callback = a function that is passed as an argument to another function
//            used to handle asynchronous operations:
//            1. reading a file
//            2. network requests
//            3. Interacting with databases
// " hey, when you are done, call this next"

/*
//hello(goodbye);

//hello(leave); 

hello(wait);

function hello(callback){
        console.log("hello");
        callback();
}

function wait(){
    console.log("wait!")
}

function leave(){
    console.log("Leave")
}


function goodbye(){
    console.log("goodbye");
}
    */

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 1, 2)