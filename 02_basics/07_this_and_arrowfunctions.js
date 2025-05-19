const user = {
    username : "vinay",
    price : 999,

    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMess()      // vinay, welcome to website

// user.username = "Sam"

// user.welcomeMess()      // Sam, welcome to website

// console.log(this);         // {}


function one(){
    let username = "vinay"
    console.log(this.username);         // undefined : we can not use 'this' keyword in functions, But we can used it in Objects.
}

// one();

const two = function () {
    let username = "vinay"
    console.log(this.username);         // undefined : we can not use 'this' keyword in functions, But we can used it in Objects.
}

// two();

const three = () => {               // arrow function
    let username = "vinay"
    console.log(this.username);         // undefined : we can not use 'this' keyword in functions, But we can used it in Objects.
}

// three();

// -----syntax of Arrow Function----- 

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,7));

// -----implicite return-----
const addTwoNum = (num1, num2) => (num1 + num2)

// console.log(addTwoNum(3,7));

const addTwoNum2 = (num1, num2) => ({username : "vinay"})

console.log(addTwoNum2(3,7));       // { username: 'vinay' }

