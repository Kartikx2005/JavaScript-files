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