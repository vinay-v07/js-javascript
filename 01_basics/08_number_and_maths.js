const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)  //3
// console.log(balance.toFixed(2));        //100.00

const num1 = 23.8966

// console.log(num1.toPrecision(3));   //23.9

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'));


//----------------------- Maths ---------------------

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9));
console.log(Math.min(-1,4,0,5,4));
console.log(Math.max(3,5,7,9,33,2));

console.log(Math.random());     // range : 0 to 1.
console.log((Math.random()*10) + 1);  //range : 1 to 10.
console.log(Math.floor(Math.random()*10) + 1);  //range : 1 to 10.

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min + 1)) + min));




