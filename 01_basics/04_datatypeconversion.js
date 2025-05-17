let score = "33abc"

// console.log(typeof score);  // string
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));  // number
// console.log(valueInNumber);  // NaN : Not a Number

let n = null
// console.log(typeof(n));

let valInNumber = Number(n)
// console.log(typeof(valInNumber));  // number
// console.log(valInNumber);  // 0

let m = true
// console.log(typeof(m));

let valInNum = Number(m)
// console.log(typeof(valInNum));  // number
// console.log(valInNum);  // 0


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let islogedIn = 1
let boolIsLogedIn = Boolean(islogedIn)
// console.log(boolIsLogedIn);

// 1 => true
// "" => false
// "vinay" => true
// 0 => false


let num = 33
let toString = String(num)
// console.log(toString);  // 33
// console.log(typeof(toString)); // string


//---------------------- Operations -----------------------

let value = 3
let negVal = -value
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**5);  // 2 to power 5
// console.log(2%3);   // modulas

let str1 = "hello"
let str2 = " vinay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2");   //32
// console.log("1" + (2 + 2)); //14
// console.log((1 + 2) + "2");   //32

// console.log(+true);  // 1 : allowed
// console.log(true+);  // error : not allowed

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++;          //101
++gameCounter;          //101
// console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"











