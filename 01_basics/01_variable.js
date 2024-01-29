const accountId=14443
let accountEmail="raviranjan8435@gmail.com"
var accountPassword="12345"
accountCity="Delhi"

let accountState;

//accountId=2 // changes not allowed in const variable

accountEmail="raviranjankumar@gmail.com"
accountPassword="raviranjan"
accountCity="patna"


console.log(accountId)

/*
prefer not to use var 
because of issue in  block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])