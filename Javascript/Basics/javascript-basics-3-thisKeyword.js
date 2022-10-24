// ------ THIS KEYWORD -------------

/* this to reference the current object */

const person_one = {
  firstName: 'John',
  lastName: 'Perez',
  fullName () {
    return `This is ${this.firstName} ${this.lastName}`
  },
  fullObject(){
    return this
  }
}

/* here we just reference parameters*/
const person_two = {
  firstName: 'John',
  lastName: 'Perez',
  fullName (name, lastName) {
    return `This is ${name} ${lastName}`
  }
}

const fullName_one = person_one.fullName()
const fullName_two = person_two.fullName("Richie", "Sander")
const fullObject = person_one.fullObject()

console.log(fullName_one)
console.log(fullName_two)
console.log(fullObject)
