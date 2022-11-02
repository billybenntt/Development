// ---------------- IFFE FUNCTION EXPRESSION  ----------------

const numOne = 30
const numTwo = 50
function add () {
  console.log(`The Result is ${numOne + numTwo}`)
}
add();


// ---------------- IFFE SCOPE 1  ----------------

(function () {
  const numThree = 33
  const numFour = 333
   console.log(`The Result is ${numThree + numFour}`)
})();


// ---------------- IFFE - PARAMETERS  ----------------

(function (numThree, numFour) {
   console.log(`The Result is ${numThree + numFour}`)
})(500,200);



// ---------------- IFFE - RETURN  ----------------

const result = (function (numThree, numFour) {
  return `The Result is ${numThree + numFour}`
})(441,200);

console.log(result)


