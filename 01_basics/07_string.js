"use strict";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const name = "vinay"
const repoCount = 1

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vinay kumar verma')

//Note : Run this code in console then we get all prototype(functions) for string.

console.log(gameName);

console.log(gameName[0])
console.log(gameName[3]);

console.log(gameName.__proto__)     //{} : object


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))  // 2 is a index. output: n

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

console.log(gameName.indexOf('y'))   // 4
console.log(gameName.indexOf('t'))   // -1 : 't' is not exist in this string.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

console.log("cat"[1])  // gives value "a"
console.log("cat".charAt(2)) // t

const newStr = gameName.substring(0,3);  
console.log(newStr);        // Vin : here in (0,3) , 3 is not included.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

const str1 = gameName.slice(-8,7)
console.log(str1);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

const str2 = "    vinay   verma   "
console.log(str2);
console.log(str2.trim())        // remove blank space from start and end. 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://vinay.com/vinay%20verma"
console.log(url);

url.replace('%20', '-')
console.log(url)            //not replaced

console.log(url.replace('%20', '-'))    //replaced

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

console.log(url.includes('vinay'));

console.log(gameName.split(' '));  // split an array basis on ' ' (space).

