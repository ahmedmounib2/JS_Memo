// Async/Await = makes a function return a promie
//               Await = makes a function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after await is placed in an event queue


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


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!")
    }
    catch(error){
        console.error(error);
    }
    
}

doChores();