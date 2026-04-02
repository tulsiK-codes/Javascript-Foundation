//Different ways of defining a variable in js
const accountId = 145623
let accountEmail = "tulsi124@gmail.com"
var accountPassword = "456123"
accountCity = "Rourkela" //it also works, but its preferable to define it with const or let

// accountId = 7894251 //not allowed to change consants
console.log(accountId);

accountEmail = "tkp2gmail.com"
accountPassword = "1123749"
accountCity = "Chennai"


/*
Prefer not to use var
because of issue in block scope and funtional scope */

// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //accountState is not defined

console.table([accountId,accountEmail,accountPassword,accountCity]);