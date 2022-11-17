// --------- ES6: ARRAY METHODS: ARRAY OF   ---------

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

// --------- ARRAY OF ---------

/* Create array of items */
const friends = Array.of(...fruits, 'Chile')
console.log(friends)

// --------- ARRAY FROM  ---------
// Turns Array-Like into Array, String, NodeList, Set
const testItem = Array.from('Chile')
console.log(testItem)

// --------- ARGUMENTS OBJECT ---------

/*Works on regular function */
function countTotal () {
  /*Transform arguments into array to apply the reduce method */
  return total = Array.from(arguments).reduce((total, currentNum) => {
    return total + currentNum
  })
}

console.log(countTotal(1, 2, 3, 4, 5))