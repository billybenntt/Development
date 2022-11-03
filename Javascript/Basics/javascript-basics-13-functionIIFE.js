// ---------------- IIFE FUNCTION EXPRESSION  ----------------
/*Immediately Invoked Function Expression */

const numOne = 30
const numTwo = 50

function add () {
  console.log(`The Result is ${numOne + numTwo}`)
}

add();

// ---------------- IIFE SCOPE 1  ----------------

(function () {
  const numThree = 33
  const numFour = 333
  console.log(`The Result is ${numThree + numFour}`)
})();

// ---------------- IIFE - PARAMETERS  ----------------

(function (numThree, numFour) {
  console.log(`The Result is ${numThree + numFour}`)
})(500, 200)

// ---------------- IIFE - RETURN  ----------------

const result = (function (numThree, numFour) {
  return `The Result is ${numThree + numFour}`
})(441, 200)

console.log(result)


