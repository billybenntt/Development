// --------- ES6: FOR IN LOOP  ---------
// Loop Over -> Objects Properties
// Not advised to be used on arrays, use FOR OF Instead

const person = {
  name: 'John',
  age: 25,
  status: 'Student'
}

/* Access Property Only */
for (const item in person) {
  console.log(item)
}

/* Access Value using Property */
for (const item in person) {
  console.log(person[item])
}
