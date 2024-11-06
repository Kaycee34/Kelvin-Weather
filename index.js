// declare const kelvin
const kelvin = 293;
// minus 273 from kelvin and assign the new value to celsius
let celsius = kelvin - 273;
// calculate fahrenheit and store in a variable
let fahrenheit = celsius * (9/5) + 32
//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)
//convert celsius to newton
let Newton = celsius * (33/100)
Newton = Math.floor(Newton)

console.log(`the temprature is ${Newton} degrees Newton`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)