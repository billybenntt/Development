// --------- ES6: REST OPERATOR   ---------
// Collecting / Gathering of items from Objects and Arrays
// Used with destructuring, rest operator must be the last
// Gathering Parameters in Function
// Everything inside the receiver {....}, [....]

// --------- ES6: REST ON ARRAYS   ---------

const fruits = ['Apple', 'Orange', 'Lemon', 'Papaya']
const [first, second, ...otherFruits] = fruits

/* Destructured Variables, Isolate 3 different Values */

console.log(first)
console.log(second)

/* Separate Array is created */
console.log(otherFruits)

// --------- ES6: REST ON OBJECTS   ---------

const person = {
  firstName: 'John',
  lastName: 'Pelle',
  job: 'Developer',
  city: 'Chicago, IL'
}

/* Destructured Variables, Isolate 3 different fields */
const { firstName, lastName, ...personalInfo } = person
console.log(firstName)
console.log(lastName)
/* Separate Object is Created */
console.log(personalInfo)

// --------- ES6: REST ON GATHERING PARAMETERS   ---------

/* Scores can be 2 or more parameters*/
const getAverage = (name, ...scores) => {
  /* Scores is an array */
  let total = 0
  for (const score of scores) {
    total += score
  }
  return total / scores.length
}

const testScores = [2, 3, 3, 4, 3, 3, 3, 3, 312]

console.log(getAverage('John', 2, 3, 3, 4))
console.log(getAverage('Brad', ...testScores))
