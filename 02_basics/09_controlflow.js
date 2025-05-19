// if

if(true){
    //statement
}

const isUserLoggedIn = true;
if(isUserLoggedIn){
        //if true
}else{
        //if false
}
// <, >, <=, >=, ==,!=, ===, !==

const key = 4
switch (key) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter a valid key.");
        break;
}

const userEmail = "vinay@gmail"

if(userEmail){
    console.log("Got user email.");
}else{
    console.log("Don't have user email.");
}

// falsy value

// false , 0, -0, BigInt 0n, "", null, undefined, NaN.

// truthy values

// "0", 'false', " ", [],{}, function(){}

const arr = []

if(arr.length === 0){
    console.log("Array is Empty.");
}

const obj = {
    user: "vinay"
}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty.");
}else{
    console.log("Object is not Empty.");
}


// Nullish Coalescing Operator (??)

let val1
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 20
val4 = null ?? 5 ?? 20

console.log(val1);      // 5
console.log(val2);      // 10
console.log(val3);      // 20
console.log(val4);      // 5
