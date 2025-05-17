const accountId = 144553
let accountEmail = "vinay123@gamil.com"
var accountPwd = "12345"
accountCity = "jaipur"

//accountId = 2 //not Allowed

accountEmail = "vicky123@gmail.com"
accountPwd = "54321"
accountCity ="Raipur"

/*
Prefer not to use 'var' 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPwd,accountCity])