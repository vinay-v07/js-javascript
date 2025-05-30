// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI)             // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI)             // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
    name : "ginger chai",
    price : 120,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai nhi bani.");
        
    }
}

// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai, "name",{
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for(let [key, value] of Object.entries(chai)){

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}