// Promise = An Oject that manages asynchronous operations,
//           wrap a Promise Object around (asynchronous code)
//           "I promise to return a value"
//           PENDING -> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE IN ORDER

// 1. CLEAN THE KITCHEN
// 2. WALK THE DOG
// 3. TAKE OUT THE TRASH
/*
function walkDog(callback){
    setTimeout(() =>{
        console.log("You walked the dog");
        callback();
    }, 1500);
}

function cleanKitchen(){
    setTimeout(() =>{
        console.log("You cleaned the kitchen");
        callback();
    }, 2000);
}

function takeOutTrash(){
    setTimeout(() =>{
        console.log("You took out the trash");
        callback();
    }, 2500);
}


cleanKitchen(() => {
    walkDog(() => {
        takeOutTrash(() => console.log("You finished all the chores"));
    });
});
*/

/*
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("You walked the dog");
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("You cleaned the kitchen");
        }, 3000);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("You took out the trash");
        }, 2000);
    });
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finishedl all the chores")});
*/


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const dogwalked = true;
            if(dogwalked){
                resolve("You walked the dog");
            }
            else{
                reject("you didnt walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {

        const kitchenCleaned = true;
        if(kitchenCleaned){
            resolve("You cleaned the kitchen");
        }
        else{
            reject("You did not clean the kitchen")
        }
        setTimeout(() =>{
        }, 3000);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {

        const trashTakenOut = false; // change to false to  simulate Reject
        if(trashTakenOut){
            resolve("You took out the trash");
           
        }
        else{
            reject("You didn't take out the trash")
        }
        setTimeout(() =>{
        }, 2000);
    });
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finishedl all the chores")}).catch(error => console.error(error));





