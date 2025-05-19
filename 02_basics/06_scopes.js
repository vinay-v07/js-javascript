
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);      //error
// console.log(b);      //error
// console.log(c);      //print : 30

let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log(a); 
}

// console.log(a);  

function one(){
    const username = "vinay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

//one();

if(true){
    const username = "vinay"
    if(username === "vinay"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// ------------------ Interesting -----------------
// 1. ---
console.log(addOne(5));         // 6

function addOne(val){
    return val + 1
}

console.log(addOne(5));         // 6

// 2. ---
console.log(addTwo(5));         // Error

const addTwo = function(val){
    return val + 2
}

console.log(addTwo(5));         // 7
