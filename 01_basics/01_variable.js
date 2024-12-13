const accountID = 4550  // This is locked 
let accountEmail = "Abhishek@gmail.com"
var accountPassword = "4000"
accountCity = "delhi" // It is also possible but a very bad way to declare 
let accountState // This gives the value of undefined
// accountID = 2

accountEmail= "abhisek@gmail.com"
accountPassword = "1000"
accountCity= "benguluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope*/  


console.table([accountPassword , accountEmail , accountID , accountCity , accountState])
