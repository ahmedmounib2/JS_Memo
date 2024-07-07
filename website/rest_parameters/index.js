/* rest parameters = (...rest) allows a function work with a variable
                    number of arguments by bundling them into an array
                    
                    spread = expands an array into separate elements
                    rest = bundles separate elements into an array */

/*
function openFridge(...foods){
    console.log(foods);
    //console.log(...foods);
}

function getFood(...foods){
    return foods;

}


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "rice";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1,food2,food3,food4,food5)
console.log(foods);  */
/*
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`)
*/
/*
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 90, 50);

console.log(`Your average is ${total}`); 
*/

function combineStrings(...strings){
    return strings.join(" ");
}

const fullname = combineStrings("Mr", "Sponge Bob", "Junior");

console.log(fullname);
