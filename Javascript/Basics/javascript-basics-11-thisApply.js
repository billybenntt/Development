// -------------  APPLY  -------------
// Let us borrow a function from an object or apply a function with "this" keyword into any object

const person = {
  firstName: 'First_name',
  lastName: 'Last_name',

}
const john = {
  firstName: 'John',
  lastName: 'Doe'
}

const patrick = {
  firstName: 'Patrick',
  lastName: 'Charmer'
}

/*Function that we want to apply */
function printName (profession, country) {
  console.log(`My Name is ${this.firstName} ${this.lastName}, I work as a ${profession}, I'm from ${country}`)
}

/*Apply requires an array of arguments */
printName.apply(john, ['Carpenter', 'Sweden'])
printName.apply(patrick, ['Plumber', 'China'])


/*Pass null if you don't want to pass an object */
printName.apply(null, ['Carpenter', 'Sweden'])
