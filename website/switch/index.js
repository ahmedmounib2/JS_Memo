// SWITCH = can be an efficient replacement to many else if statements
/*
let day = "pizza";

if(day == 1){
    console.log(`it's monday`);
}
else if(day == 2){
    console.log(`it's tuesday`);
}
else if(day == 3){
    console.log(`it's wednesday`);
}
else if(day == 4){
    console.log(`it's thursday`);
}
else if(day == 5){
    console.log(`it's friday`);
}
else if(day == 6){
    console.log(`it's saturday`);
}
else if(day == 7){
    console.log(`it's sunday`);
}
else{
    console.log(`${day} is not a day`);
}*/

let day = 1;

switch(day){
    case 1:
        console.log(`it's Monday`);
        break;
    case 2:
        console.log(`it's Tuesday`);
        break;
    case 3:
        console.log(`it's Wednesday`);
        break;
    case 4:
        console.log(`it's Thursday`);
        break;
    case 5:
        console.log(`it's Friday`);
        break;
    case 6:
        console.log(`it's Saturday`);
        break;
    case 7:
        console.log(`it's Sunday`);
        break;
    default: console.log(`${day} is not a day`)
}


let testScore = 92;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70 :
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D"; 
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);