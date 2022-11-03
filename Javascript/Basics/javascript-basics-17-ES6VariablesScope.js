// ----------------  ES6 Variables SCOPE ----------------

/* Function and Braces Scope */

/*Function  Scope */
var number = 199
/*Braces Scope */
let numberTwo = 199
const numberThree = 300

function greet () {
  var random = 'Bob'
  console.log(`Hello There ${random},${number},${numberTwo},${numberThree}`)
}

greet()

/* Function Scope and not Braces(LOCAL) Scope*/

var total = 1000
var test = true

if (test) {
  var total = `Oranges`
  console.log(`Hello your total is ${total}`)
}

/*Redefined within the Braces */
console.log(total)

