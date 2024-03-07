const accountId=14455;
let accountEmail="deepak@gmail.com";
var accountPassword="21212121";
accountcity="seraikella"
let accountState;


// accountId=2;//not allowed

accountEmail="dee@gmail.com";
accountPassword="12345";
accountcity="bengaluru";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId); 
console.table([accountId,accountEmail,accountPassword,accountcity,accountState]);
