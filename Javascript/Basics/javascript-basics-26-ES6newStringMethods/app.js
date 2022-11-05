// --------- ES6: NEW STRING METHODS  ---------
// startsWith, endsWith, includes, repeat


/* Test Strings */
const person = 'Peter Smith'
const employee = '23456-EMP-PETER-SMITH'
const manager = '23456-MGR-JOHN-DOE'
const someDude = 'Pepe Sierra '

// --------- ES6: CHECK SUB-STRINGS  ---------

/* Check if String Starts with Lowercase or Uppercase */
console.log(person.startsWith('P') || person.startsWith('p'))
/* Check if String Starts with EMP On Position 6 */
console.log(employee.startsWith('EMP', 6))
/* Check if String Ends with Substring */
console.log(employee.endsWith('PETER'))
console.log(employee.endsWith('SMITH'))
/* Check if String Includes Substring */
console.log(manager.includes('MGR'))

// --------- ES6: MULTIPLY STRINGS  ---------

const multiplyPeople = (person, amount) => person.repeat(amount)
const dupes = multiplyPeople(someDude, 5)
console.log(dupes)