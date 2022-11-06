// --------- ES6: ARRAY METHODS  ---------

// Find: Gets Specific Item
// Find Index: Gets index of Item
// Every - Confirms if every item in the array meets the conditions
// Some - Confirms if at least one item in the array meets the conditions

const people = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bill' },
  { id: 3, name: 'Mark' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Ruiz' },
  { id: 6, name: 'Anna' }
]

const grades = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const goodGrades = ['A', 'B', 'B', 'A', 'X']



/* Filter and Return Array Objects with "Anna"*/
const resultAllAnna = people.filter((item) => item.name === 'Anna')
console.log(resultAllAnna)

/* Filter and Return 1 Object with "Anna" */
const resultOneAnna = people.find((item) => item.name === 'Anna') || 0
console.log(resultOneAnna)

/* Filter and Return 1 Object with "Anna" */
const isThereBill = people.some((item) => item.name === 'Bill')
console.log("Bill", isThereBill)

/* Get the Index of ID 3*/
const person = people.findIndex(item => item.id === 3)
console.log(person)

/* Check  if all the letters go before H  */
const areYouGuysNotH = grades.every((item) => item <= 'H')
console.log(areYouGuysNotH)


/* Check  if are there any D inside array */
const areThereAnyEx = goodGrades.some((item) => item === 'D')
console.log(areThereAnyEx)

