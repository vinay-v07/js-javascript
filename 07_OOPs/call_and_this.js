function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, gmail, pwd){
    // setUsername(username)
    setUsername.call(this, username)

    this.gmail = gmail
    this.pwd = pwd
}

const vinay = new createUser("vinay", "vinay@gmail.com", "123")
// console.log(vinay);                 //createUser { gmail: 'vinay@gmail.com', pwd: '123' }

console.log(vinay);                //createUser { username: 'vinay', gmail: 'vinay@gmail.com', pwd: '123' }               

