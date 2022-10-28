// -------------  CALL -------------
// Let us borrow a function from an object or apply a function with "this" keyword into any object

const person = {
  firstName: 'First_name',
  lastName: 'Last_name',
}
const john = {
  firstName: 'John',
  lastName: 'Doe'
}

/*Function that will be called into the object */
function printName (profession, country) {
  console.log(`My Name is ${this.firstName} ${this.lastName}, I work as ${profession}, I'm from ${country}`)
}



/*Call requires arguments separated by comma */
printName.call(john, 'Carpenter', 'Sweden')

/*Pass null if you don't want to pass an object */
printName.call(null, 'Carpenter', 'Sweden')
