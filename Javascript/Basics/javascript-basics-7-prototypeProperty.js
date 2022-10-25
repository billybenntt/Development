// ------ PROTOTYPAL INHERITANCE MODEL  -------------
// the Prototype Property allows us to inject functions, variables into an object

function Person (first, last, age, eyecolor, intialCash) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.eyeColor = eyecolor
  this.balance = intialCash

  this.description = function () {
    return `Name: ${this.firstName}${this.lastName} Age: ${this.age} EyesColor: ${this.eyeColor}`
  }
  this.origin = function () {
    return `Nationality: ${this.nationality}`
  }
  this.deposit = function (amount) {
    this.balance += amount
    return `${this.firstName} Your balance is ${this.balance}`
  }
}

/*Assign Prototype Property to All the PERSON Instances */
Person.prototype.nationality = 'English'
Person.prototype.yearOfBirth = function () {
  return (2022 - this.age)
}


/*Instantiate Individual Objects  */
const myFather = new Person('John', 'Doe', 50, 'blue', 1000)
const myMother = new Person('Sally', 'Rally', 48, 'green', 3000)

console.log(myFather.description())
console.log(myFather.origin())
console.log(myFather.yearOfBirth())
console.log(myFather.deposit(100))
console.log(myFather.deposit(100))

/*Instantiate Individual Objects  */
