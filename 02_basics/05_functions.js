function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");    
}

// sayMyName();

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers(42,3);    //45
// addTwoNumbers(42,"3");    //423
// addTwoNumbers(42,"a");    //42a

function addNumbers(num1, num2){
    // let result =  num1 + num2
    // return result

    return num1 + num2
}

const res = addNumbers(3,5)
// console.log(res);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("vinay"));


function calculateCartPrice(...num1){   // ... => rest operator.
    return num1
}

// console.log(calculateCartPrice(200,300,500));


const user = {
    username : "Vinay",
    age : 22
}

function handleObjects(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`);
}

// handleObjects(user);

// handleObjects({
//     username: "Sam",
//     age: 23
// });

const myArr = [200, 400, 300, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
