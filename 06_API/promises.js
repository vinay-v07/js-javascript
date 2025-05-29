const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed.");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed.");
})

//-----------------OR---------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed.");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved.");
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "vinay", email: "vinay@gmail.com"})  // parameter passing
    }, 1000)
})

promiseTwo.then(function(user){
    // console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
         let error = false          // true or false
         if(!error){
            resolve({username: "vinay", pwd: "123"})
         }else{
            reject('ERROR : Something went wrong.')
         }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);   
}).finally(() => console.log("The promise is either resolved or rejected.")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
         let error = true        // true or false
         if(!error){
            resolve({username: "javascript", pwd: "123"})
         }else{
            reject('ERROR : JS went wrong.')
         }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))