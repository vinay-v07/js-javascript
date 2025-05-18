// const obj = new Object();       //singleton object

const obj = {}                   //non-singleton object

obj.id = "123abc"
obj.name =  "vinay"
obj.isLoggedIn = false

console.log(obj);

const regUser = {
    email:"abc@gmail.com",
    fullname: {
        userfullname:{
            firstname : "vinay",
            lastname : "verma"
        }
    }
}

// console.log(regUser.fullname.userfullname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1, obj2)  
// const obj3 = Object.assign({}, obj1, obj2)  //{} target and other objects are treates as source. 
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "vinay@gmail.com"
    },
    {
        id: 2,
        email: "vinay@gmail.com"
    },
    {
        id: 3,
        email: "vinay@gmail.com"
    },
    {
        id: 4,
        email: "vinay@gmail.com"
    }
]                   // Array of objects.

// console.log(users[1].email);

console.log(Object.keys(obj));      // return array of keys of an object.

console.log(Object.values(obj));      // return array of values of an object.


console.log(Object.entries(obj));   // return array of pair [kays, values] of an object.   

console.log(obj.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "vinay"
}

// console.log(course.courseInstructor);
const {courseInstructor: Instructor} = course
console.log(Instructor);


//          JSON
// {
//     coursename: "js",
//     price: "free",
//     courseInstructor: "vinay"
// }

//     Array of Object
// [
//     {},
//     {},
//     {}
// ]
