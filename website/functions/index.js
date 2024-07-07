/*
function happyBirthday(username, age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log(`Happy birthday to you`);
    console.log(`You are ${age} years old`);
}

happyBirthday("jack", 30);
happyBirthday("bob", 10);
*/

function add(x, y){
    let result = x+y;
    return result;
}

let answer = add(2,3);

console.log(answer);


function subtract(x,y){
    return x-y;
}
console.log(subtract(2,3));

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x/y;
}
console.log(divide(10, 2));

/*
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}*/

function isEven(number){
    
    return number % 2 === 0 ? true : false;
}
console.log(isEven(11));

/*

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

}
    */
   function isValidEmail(email){
    return email.includes("@") ? true : false;

   }

console.log(isValidEmail("John@gmail.com"));