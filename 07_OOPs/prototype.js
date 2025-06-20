// new keyword ---------------------
function multiplyBy5(num){
    return num*5
}

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}

const vinay = new createUser("vinay",89)
const vicky = new createUser("vicky",80)

vinay.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// prototype -------------------------

let myHeros = ["vinay","vicky","shubham","vivek","lalit"]

let heros = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);   
    }
}

Object.prototype.vinay = function(){
    console.log(`Vinay is present in all objects`);
}

Array.prototype.vicky = function(){
    console.log(`Vicky is present in all objects`);
}

// heros.vinay()
// myHeros.vinay()
// myHeros.vicky()
// heros.vicky()          // error  

// inheritance

const User = {
    name: "vinay",
    email: "vinay@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax-----------------------------

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "vinayverma     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()