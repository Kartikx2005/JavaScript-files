const accountId = 144665
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"

// prefer not to use var because of issue in blovk scope and functional scope

accountCity = "Haridwar" // this method is also correct but not preferred

// accountId = 3654 // not allowed beacuse it is const object 

accountEmail = "abc@gmail.com"
accountPassword = "56879"
accountCity = "Bengaluru"

console.log(accountId)
// by this method we can print only one variable
// to print multiple variable at a time we can use table method
console.table([accountId, accountEmail, accountPassword, accountCity])
