// Date

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());        //Imp.

console.log(myDate.toLocaleString('default',{weekday: "long",}));               // today's day

// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

console.log(typeof myDate)      //object

let date1 = new Date(2023,0,23)
console.log(date1.toLocaleString());

let date2 = new Date("2023-01-14")
console.log(date2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);      // values in milisecond.

console.log(date2.getTime());

console.log(Math.floor(Date.now()/1000));    // In second.

let date3 = new Date()
console.log((date3.getDay()));
console.log((date3.getMonth()));
console.log((date3.getHours()));

console.log(`${date3.getMonth()} and the time is ${date3.getHours()}`);
