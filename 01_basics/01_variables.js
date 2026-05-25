const accountId = 144553;
let accountEmail = "aviansh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // now recommended to declare variable like this
let accountState;

// accountId = 2 // not allowd because it is const
// console.log(accountId);

accountEmail = "avinash@gmail.com";
accountPassword = "1234@dsfj";
accountCity = "Patna"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
