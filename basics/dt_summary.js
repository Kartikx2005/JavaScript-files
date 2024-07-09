// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// Reference (Non primitive )
// Array, Object, Function

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name : "hitesh",
    age : 22
}
const myFunction = function(){
    console.log("Hello World!")
}


// *******************************
// Stack (Primitive), Heap (Non - Primitive)

let myYoutubename = "xyzdotcom"

let anothername = myYoutubename
anothername = "abcdotcom"

console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email : "xyz@yahoo.com",
    upi : "xyz@ybl"
}
let userTwo = userOne
userTwo.email = "abc@yahoo.com"

console.log(userOne.email)
console.log(userTwo.email)
