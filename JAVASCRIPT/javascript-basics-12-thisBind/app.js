
// -------------  BIND -------------
// Creates a new function with the object and arguments passed to that object

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
   console.log(`My Name is ${this.firstName} ${this.lastName}, I work as a ${profession}, I'm from ${country}`)
}


/* Assign Bind Function with Parameters, needs list */
let carpenterJohnFunction = printName.bind(john, 'Carpenter', 'Sweden')


/*Call the bind function */
carpenterJohnFunction()
