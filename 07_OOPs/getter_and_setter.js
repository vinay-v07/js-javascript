class User {
    constructor(email,pwd){
        this.email = email
        this.pwd = pwd
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value    // _email is a private property.
    }

    get pwd(){
        return this._pwd.toUpperCase()
    }
    set pwd(value){
        this._pwd = value    // -pwd is a private property.
    }
}

const vinay = new User("vinay@gmail.com", "abc")
console.log(vinay.pwd)
console.log(vinay.email)