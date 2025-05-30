class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const vinay = new User("vinay")
console.log(vinay.logMe());                 // Username is vinay
// console.log(vinay.createId());           // error


class Teacher extends User{
    constructor(username, email, pwd){
        super(username)
        this.email = email
        this.pwd =pwd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const vicky = new Teacher("vicky", "vinay@gmail.com", "123")

vicky.logMe()               // Username is vicky
console.log(vicky.createId() );           // Username is vicky