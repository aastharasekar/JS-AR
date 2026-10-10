const accountId = 14566
let accountEmail = "aastharasekar2155@gmail.com"
var accountPassword = 12345
accountCity = "Gadchiroli"
console.log(accountId);

accountEmail = "aastha1@google.com"
accountPassword = 111111
accountCity = "Banglore"
/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity])