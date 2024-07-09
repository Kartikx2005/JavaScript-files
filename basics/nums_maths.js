const score = 400
console.log(score) // 400

const balance = new Number(score)
console.log(balance) // [Number: 400]

console.log(balance.toString().length) // 3

console.log(balance.toFixed(1)) // 400.0

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9

const hundreds = 1800000
console.log(hundreds.toLocaleString('en-IN'))


// **************Maths*************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.round(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) // always give the value between 0 and 1
console.log((Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) +min )