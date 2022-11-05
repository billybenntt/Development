function Human (first, last, age, eyecolor, intialCash) {
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

/* Declare new Object */
const myFather = new Human('John', 'Doe', 50, 'blue', 1000)
const emptyObject = {}
const emptyArray = []