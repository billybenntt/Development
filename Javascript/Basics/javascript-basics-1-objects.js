// ------ OBJECTS BASICS -------------

/*Simple object*/
const person = {
  name: 'John',
  age: 25,
  married: true,
  siblings: ['Lester', 'Ann', 'Peter'],
  greet: function (name) {
    console.log(`Hello, My Name is ${name}`)
  },
  /*Shorthand Method*/
  sayHello (name) {
    console.log(`Hello, My Name is ${name}`)
  }
}

/* Access Properties */
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.married)
console.log(person.siblings)
person.greet('Lucian')
person.sayHello('Pepe')

/* Change Properties */

person.age = 70;
console.log(person.age)

/* Delete Properties */

const isDeleted = delete person.siblings
console.log(isDeleted)
