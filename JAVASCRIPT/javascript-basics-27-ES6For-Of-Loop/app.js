// --------- ES6: FOR OF LOOP  ---------
// Loop Over -> String, Array, Node list, Map, Set , not Objects
// For Of Supports Break and Continue, Unlike forEach that does not

const fruits = ['Apple', 'Banana', 'Orange', 'Peach']
const longName = 'John Smith Harper Pepper III'
let shortName = ''

/*Skips the Iteration if "Orange "*/
for (const item of fruits) {
  if (item === 'Orange') {
    continue
  }
  console.log(`${item}X`)
}

/*Ends all the  Iteration if "Orange "*/
for (const item of fruits) {
  if (item === 'Orange') {
    break
  } else {
    console.log(`${item}X`)
  }
}

/*Skip Iteration if Whitespace*/
for (const letter of longName) {
  if (letter === ' ') {
    continue
  }
  shortName += letter
}
console.log(shortName)