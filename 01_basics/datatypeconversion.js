let score = "33abc"

console.log(typeof score);  //string
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));  //number
console.log(valueInNumber);  //NaN : Not a Number

let n = null
console.log(typeof(n));

let valInNumber = Number(n)
console.log(typeof(valInNumber));  //number
console.log(valInNumber);  // 0

let m = true
console.log(typeof(m));

let valInNum = Number(m)
console.log(typeof(valInNum));  //number
console.log(valInNum);  // 0


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let islogedIn = 1
let boolIsLogedIn = Boolean(islogedIn)
console.log(boolIsLogedIn);

// 1 => true
// "" => false
// "vinay" => true
// 0 => false


let num = 33
let toString = String(num)
console.log(toString);  // 33
console.log(typeof(toString)); //string


