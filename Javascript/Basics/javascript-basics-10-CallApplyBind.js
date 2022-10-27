// -------------  CALL, APPLY and BIND -------------

const personOne = {
  name: 'John',
  age: 21,
  greet () {
    return `Hi ${this.name} I'm ${this.age} years old`
  },

  addHundredYears () {
    return `In hundred years ${this.age + 100}`
  }

}

const personTwo = {
  name: 'Susan',
  age: 41,
}

// Generic Function
function sayHello () {
  return `Hi ${this.name} I'm ${this.age} years old`
}

// -------------  CALL  -------------
// Extract a function from a different object and apply it to another (list of items)

/* Extract Function - Returns Undefined */
let greetFunction = personOne.greet

/* Call function in different object */
console.log(greetFunction.call(personTwo))

/* Grab method from person one and call it on person two */
console.log(personOne.addHundredYears.call(personTwo))

/* Grab method from person one and call it on random object */
console.log(personOne.greet.call({ name: 'Bill', age: 100 }))

// -------------  APPLY  -------------

const items = [
  { name: 'Bob', age: 21 },
  { name: 'Rheas', age: 24 },
]

console.log(sayHello.apply(items[0]))
console.log(sayHello.apply(items[1]))
console.log(personOne.greet.apply(items[1]))