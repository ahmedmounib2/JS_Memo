// for loop = Repeat some code a Limited amount of times 

/*
for(let i = 0; i<= 2; i++){
    console.log("Hello");

}


for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("Happy new year");

for(let i = 10; i > 0; i-=2){
    console.log(i);
}*/

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
        //break;
    }
    else{
        console.log(i);
    }
}