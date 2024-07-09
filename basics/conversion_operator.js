let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

// "33" -> 33
// "33abc" -> Nan (Not a Number)
// true -> 1 false -> 0
// undefined -> NaN
// null -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)

// "" -> false
// "name" -> true 
// 1 -> true  0 -> false

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)



// *************Operations******************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello "
let str2 = "Kartik"
let str3 = str1 + str2

console.log(str3);
console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32 

console.log(+true) // 1
console.log(+"") // 0

