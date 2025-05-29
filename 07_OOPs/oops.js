// object literal


const user = {
    username : "vinay",
    age : 22,
    signedIn : true,

    getUserDetails : function(){
        console.log('Got user details from database.')
    }
}
console.log(user.username);
console.log(user.getUserDetails());


// ---------------------cunstructor function ----------------------

// const promiseOne = new Promise()
// const date = new Date()

function User(username, age){
    this.username = username;
    this.age = age
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User("vinay",22)
const userTwo = new User("vicky",23)

console.log(userOne);   
console.log(userTwo);   

console.log(userOne.constructor); 

// instanceof ------ try itself.