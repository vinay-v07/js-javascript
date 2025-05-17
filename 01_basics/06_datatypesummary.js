// Datatype : They are divided according to , how they are stored in memory and how they are accessed.
// 1. Primitive - 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);       //false : return value must be different

const bigNumber = 635235546467777226n   //BigInt

// 2. Non-Primitive (Reference Type) - Arrays, Objects, Functions.
//Note: typeof this datatype is 'function' and for function it is 'object function'.

// Array -
const heros = ["shaktiman", "naagraj", "doga"];

// Object -
let myObj = {
    name: "vinay",
    age: 22,
}

// Function -
const myFunction = function(){
    console.log("Hellow World");
}

console.log(typeof myFunction);

//------------------------ Memory ------------------------

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "vinay"
let name2 = myName          // create copy
console.log(name2);
name2 = "vishal"
console.log(name2);
console.log(myName);


let user1 = {
    email: "vinay123@gmail.com",
    upi: "abc2ybl"
}

let user2 = user1       // giving references

user2.email = "vicky123@gmail.com"

console.log(user1.email);
console.log(user2.email);

