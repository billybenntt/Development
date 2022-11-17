// ----------------  ES6 Variables ----------------

/*Define, Update, Redefine*/

var number = 199
number = 200
var number = 'String'
console.log(number)


/*Define, Update*/

let numberTwo = 199
numberTwo = 200
console.log(numberTwo)

/*Define */

const numberThree = 300;
console.log(numberThree)

// ----------------  ES6 Mutation ----------------

/* Mutation is allowed for properties */
const objectOne = {
  name: "Bob"
}
objectOne.name = "John";

console.log(objectOne.name)
