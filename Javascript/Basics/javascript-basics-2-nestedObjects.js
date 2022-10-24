// ------ NESTED OBJECTS  -------------

/* Object with Nested Object*/
const person = {
  name: 'John',
  age: 25,
  married: true,
  job: {
    title: 'Developer',
    company: {
      name: 'Google',
      address: '123 UAR ST'
    }
  }
}
/* Access nested properties*/

const address = person.job.company.address
console.log(address)

// ------ SET VARIABLE AS PROPERTY  -------------

/* ES6 Variable inside Object */

const age = 60
const human = {
  name: 'John',
  age,
  married: true,
}

console.log(human)


// ------ DOT VS BRACKET NOTATION  -------------

const selection = 'b'
const random = `random-value-${selection}`

const vampire = {
  age: 100,
  'house': 'warlock',
  'random-value-a': 'Hello A',
  'random-value-b': 'Hello B',
  'random-value-c': 'Hello C',
}

/* Access Properties by passing string */
console.log(vampire[random])
console.log(vampire[`age`])