// ES6

class User {
    constructor(username, email, pwd){
        this.username = username
        this.email = email
        this.pwd = pwd
    }

    encryptPassword(){
        return `${this.pwd}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("vinay", "vinay@123", "123" )

console.log(user.encryptPassword());
console.log(user.changeUserName());

// OR ----

// function User(username, email, pwd){
//         this.username = username
//         this.email = email
//         this.pwd = pwd
//     }
// User.prototype.encryptPassword = function() {
//         return `${this.pwd}abc`
//     }

// User.prototype.changeUserName = function(){
//         return `${this.username.toUpperCase()}`
//     }

// const user2 = new User("vinay", "vinay@123", "123" )

// console.log(user2.encryptPassword());
// console.log(user2.changeUserName());

