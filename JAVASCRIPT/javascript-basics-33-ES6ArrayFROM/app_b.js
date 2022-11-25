// --------- ES6: ARRAY FROM B ---------



const stringElement = 'abcdefghijklmnopqrstuvwxyz'

const result = Array.from(stringElement, item => item + item.toUpperCase())

console.log(result)

