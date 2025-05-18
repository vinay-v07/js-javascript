// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "vinay",
    age: 22,
    "location" : "Raipur",
    email: "vinay123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "myKey1",                      //symbol as key ***IMP
}

console.log(JsUser.email);
console.log(JsUser["email"]);   //better way to access object ***IMP


console.log(JsUser["location"]);

console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);

JsUser.email = "vicky123@gmail.com"
console.log(JsUser["email"]);

// Object.freeze(JsUser)               // object freeze

JsUser.email = "shubham123@gmail.com"   // No Change
console.log(JsUser["email"]);

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS Users ! ");
}

console.log(JsUser.greeting);       //[Function (anonymous)]
console.log(JsUser.greeting());



JsUser.greetingTwo = function(){
    console.log(`Hello JS Users !, ${this.name} `);
}

console.log(JsUser.greetingTwo());

