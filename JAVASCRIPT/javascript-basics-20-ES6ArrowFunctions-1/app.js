// ----------------  ES6 ARROW FUNCTIONS  ----------------
// No Name, Always Expression, Assign to variable
// No function Keyword
// Fat Arrow Required

// ----------------  ARROW STANDARD  ----------------

const display = () => {
  console.log('Hello')
}
display()

// ----------------  ARROW CONCISE  ----------------

const sumNumber = num => num * 2
let result = sumNumber(2)
console.log(result)

// ----------------  ARROW CONCISE - PARENTHESES RETURN ----------------

/*Return an object one line (no double curly braces) */
const computeNumbers = (num1, num2) => ({ result_product: num1 * num2, result_sum: num1 + num2 })

let finalGrade = computeNumbers(20, 20)
console.log(finalGrade)

// ----------------  ARROW CALLBACK ----------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const odds = numbers.filter(item => item % 2 !== 0)
const pairs = numbers.filter((item) => item % 2 === 0)
console.log(odds)
console.log(pairs)
