class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

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

const vinay = new Teacher("vinay", "vinay@gmail.com", "123")

vinay.addCourse()

console.log(User === Teacher);          //false

console.log(vinay instanceof Teacher);       // true

console.log(vinay instanceof User);       // true

