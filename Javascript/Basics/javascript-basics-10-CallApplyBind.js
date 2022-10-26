// -------------  CALL, APPLY and BIND -------------


const personOne = {
  name: 'John',
  age: 21,
  greet(){
    return `Hi ${this.name} I'm ${this.age} years old`
  }
}


function greet () {
   return `Hi ${this.name} I'm ${this.age} years old`
}

const personTwo = {
  name: 'Susan',
  age: 41,
}


// -------------  CALL  -------------


/*Extract Function - Returns Undefined */
let greetFunction = personOne.greet

/*Assign Value - Returns the Value */
let greetValue = personOne.greet()




console.log(greetFunction.call(personTwo))