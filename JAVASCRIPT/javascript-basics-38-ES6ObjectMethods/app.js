// --------- ES6: OBJECT METHODS  ---------
// Convert objects into arrays
// Object.keys() - Property Names: Into Arrays
// Object.values() - Property Values: Into Arrays
// Object.entries() - Generate arrays of Arrays with [Name, Value]

const person = {
  name: 'John',
  age: 25,
  status: 'Student'
}

/* Get Array of Property Keys/Names */
const personKeys = Object.keys(person)
console.log(personKeys)


/* Get Array of Property Values */
const personValues = Object.values(person)
console.log(personValues)


/* Get Array of Array [Name, Value] */
const personEverything = Object.entries(person)
console.log(personEverything)