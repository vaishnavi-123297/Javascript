
const account_Id = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"//mostly not used due to scoped 
accountCity = "Jaipur"
let accountState;

//accountId = 2   //not allowed 
accountEmail = "hc@gmail.com"
accountPassword = 12333
accountCity = "Banglore"
console.log(accountId);
/*
prefer to not use var 
because of issue in block scoped and function scoped  */
console.table([accountEmail,accountPassword,account_Id,accountCity,accountState])
//when value is not declared it gives undefined 
