// closure = A function defined inside of another function,
//            the inner function has access to the variables 
//            and scope of the outer function.
//            Allow for private variables and state maintenance
//            Used frequently in JS Framework: React, Vue, Angular
//            especially when working ewith function based components
/*
function outer(){

    let message = `Hello`;

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Good bye " 
outer();
*/
/*
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

// Trying to directly set `count` won't affect the internal `count` variable
counter.count = 0; // This adds a new property `count` to the object but doesn't affect the internal `count`

console.log(counter); // Output: { increment: [Function: increment], getCount: [Function: getCount], count: 0 }
console.log(counter.getCount()); // Correctly gets the internal count value, which should be 4
*/

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};

}

const game = createGame();


game.increaseScore(6);
game.increaseScore(5);

game.decreaseScore(3);
console.log(`the final score is ${game.getScore()} pts`)