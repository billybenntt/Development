// ------  CONSTRUCTOR PROPERTY -------------

/*Use Capital Case*/
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.fullName = function () {
    return `My Full Name is ${this.firstName} ${this.lastName}`
  }

}
/*Declare instances of object */
const john = new Person('John', 'Sander')
const bob = {}
const list =[]
const sayHello = function () {}

/*Check which Object created this instance*/
console.log(john.constructor)
console.log(bob.constructor)
console.log(list.constructor)
console.log(sayHello.constructor)


// ------  CONSTRUCTOR NEW KEYWORD -------------

/*Create an object of the same kind as "John" */
let susy = new john.constructor("Susy", "Gomez")
console.log(susy.fullName())