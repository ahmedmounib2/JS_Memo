// Callback Hell = Situation in JavaScript where callbacks 
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promosises + async/await to avoid Callback Hell

// ex. to using callback hell

function task1(Callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        Callback();
    }, 2000)
}

function task2(Callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        Callback();
    }, 1000)}

function task3(Callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        Callback();
    }, 1500)}

function task4(Callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        Callback();
    }, 3000)}

function task5(Callback){
    setTimeout(() => {
        console.log("Task 5 complete");
        Callback();
    }, 2500)}


task1(() =>{
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => console.log("All tasks complete"))
            })
        })
    })
})