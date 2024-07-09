console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// the reason is that an equality check == and comparison work diffirently 
// comaprisons convert null to a number, treating it as 0
// thats why null >= 0 true and null > 0 is false

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// === (not only check the value but also check the data type)
console.log("2" === 2) // false 
