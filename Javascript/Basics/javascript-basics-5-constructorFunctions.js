// ------  CONSTRUCTOR FUNCTIONS OBJECTS -------------
// No return keyword needed
// New creates new object, points to it, omit return

/*Use Capital Case*/
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.fullName = function () {
    return `My Full Name is ${this.firstName} ${this.lastName}`
  };

}

/*Use New Keyword */
const john = new Person("John", "Perez")
const red = new Person("John", "Red")
const cash = new Person("Cash", "Red")

console.log(john.fullName())
console.log(red.fullName())
console.log(cash.fullName())