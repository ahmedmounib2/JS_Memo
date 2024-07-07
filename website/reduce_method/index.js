// .reduce() = reducew the elements of an array to a single value
/*
const prices = [5, 20, 30, 10, 25, 15, 60];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){7
    return accumulator + element;
}
*/

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);


function getMax(accumulator, element){
    return Math.max(accumulator,element);
}

function getMin(accumulator, element){
    return Math.min(accumulator,element);
}
