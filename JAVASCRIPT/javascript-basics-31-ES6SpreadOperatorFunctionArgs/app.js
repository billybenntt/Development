// --------- ES6: SPREAD OPERATOR /  FUNCTION ARGUMENTS   ---------

// --------- SINGLE ARGUMENTS  ---------

const numbers = [12, 234, 452, 3, 5, 1, 3, 45, 13, 45, 344, 12234, 3454, 44224]

/* Single numbers without any array */
console.log(Math.max(10, 20, 30, 560))

/* Equal to the content inside the array but without the array*/
console.log(Math.max(...numbers))


// --------- FUNCTION ARGUMENTS  ---------

const john = ['John', 'Sanders', 'Chicago']

/* Function Takes 2 Parameters */
const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`)
}

/*Spread parameters from array and take first  2 values */
sayHello(...john)

