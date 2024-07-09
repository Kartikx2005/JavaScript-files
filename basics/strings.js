const name = "Kartik"
repoCount = 4

console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('kartik-ac-90')
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('t'))
console.log(gameName.charAt(2))

const newString = gameName.substring(0,4)
console.log(newString) 
// we cannot give negative value to substring

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    Kartik    "
console.log(newStringOne) 
console.log(newStringOne.trim())

const url = "https://kartik.com/kartik%20coder"

console.log(url.replace('%20','-'))
console.log(url.includes("kartik"))

console.log(gameName.split("-"))