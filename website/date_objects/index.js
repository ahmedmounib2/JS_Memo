// Date objects = Objects that contain values that represent dates and times
//                these date objects can be changed and formatted


//      Date(year, month, day, hour, minute, second, ms)
/*
const date = new Date(2024, 0, 1, 2, 3, 4, 5);
const date2 = new Date("2023-01-02T12:00:00Z")



<console.log(date);
>console.log(date2);
*/
//const date = new Date(17000000);
/*
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(dayOfWeek);
*/
/*
const date = new Date();

date.setFullYear(2026);
date.setMonth(6);
date.setDate(15);
date.setHours(23);
date.setMinutes(59);
date.setSeconds(4);

console.log(date);
*/

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log(`Happy new year`);
}

