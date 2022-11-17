// --------- ARRAY DESTRUCTURING - ASSIGNING  ---------

const fruits = ['Orange', 'Banana', 'Lemon']
const friends = ['John', 'Peter', 'Bob', 'Travis']

/* Extract in order */
const [value1, value2, value3] = fruits
console.log(value1, value2, value3)

/* Extract with index skip */
const [friend1, friend2, , friend4] = friends
console.log(friend1, friend2, friend4)

// --------- ARRAY DESTRUCTURING - SWAPPING ---------
// This replaces the temp variable method

/* Declare values with let */
let first = 'Bob';
let second = 'John'; // Important to use ;

/* Swap positions */
[second, first] = [first, second]

console.log(first, second)

