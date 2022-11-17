// --------- ES6: OBJECT ENTRIES MAP  ---------

const person = {
  name: 'John',
  age: 25,
  status: 'Student'
}

/*Get the Keys/Values */
const result = Object.entries(person)

/* Return the only keys in uppercase on each iteration*/
const newResult = result.map((item) => {
  const [first, second] = item
  return first.toUpperCase()
})


console.log(newResult)