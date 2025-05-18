// Array

const arr = [0,1,2,3,4,5]

//Note : JavaScript arrays are resizable and can contain a mix of different data types.

// console.log(arr[0]);

const arr2 = ["ironman","wanda"]

const arr3 = new Array(1,2,3,4,5,6,7)

// console.log(arr);       //[0,1,2,3,4,5]
// console.log(arr2);
// console.log(arr3);

// methods

arr.push(8)                  //  [0,1,2,3,4,5,8]
arr.push(3)                  //  [0,1,2,3,4,5,8,3]
// console.log(arr);            
// console.log(arr.length)      //  8

arr.pop()                    //  [0,1,2,3,4,5,8]
// console.log(arr);

arr.unshift(7)               //  [7,0,1,2,3,4,5,8]
// console.log(arr);

arr.shift()                  //  [0,1,2,3,4,5,8]
// console.log(arr)

// console.log(arr)
// console.log(arr.includes(4));   //true
// console.log(arr.indexOf(8));    //6
// console.log(arr.indexOf(18));   //-1

const newArr = arr.join()    // convert arr into string

// console.log(arr);
// console.log(newArr);

// console.log(typeof(arr))        // object
// console.log(typeof(newArr))     // string

//***  slice ,  splice

const arr4 = [0,1,2,3,4,5]

console.log("A ", arr4);            // A  [ 0, 1, 2, 3, 4, 5 ]

const newArr1 = arr4.slice(1,3);    // Create copy of given range.

console.log(newArr1);               //  [1,2]
console.log("B ", arr4);            // B  [ 0, 1, 2, 3, 4, 5 ]

const newArr2 = arr4.splice(1,3);   // Cut the given range from Array.

console.log(newArr2);               //  [1,2,3]
console.log("C ", arr4);            // C  [ 0, 4, 5 ]