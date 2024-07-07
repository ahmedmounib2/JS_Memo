// Number guessing game

const minNum = 1 ;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){  // is guess is not a number
        window.alert("Please type a valid number");
    }
    else if (guess < minNum || guess > maxNum){
        console.log("please enter a valid number");
    }
    else{
        attempts ++;
        if(guess < answer){
            window.alert("Too Low!, try again");
        }
        else if(guess > answer){
            window.alert("Too High!, try again");
        }
        else{
            window.alert(`congratulations the answer was ${answer}, it took you ${attempts} attempts to win`)
        }
    }
    running = false;
}