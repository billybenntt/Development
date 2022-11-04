// ----------------  FUNCTION CLOSURES 1  ----------------

function outer (inputSecret) {
  let privateVariable = inputSecret

  function inner () {
    console.log(`Hello Inner ${privateVariable}`)
  }

  return inner
}

/* Assign and Run */

const assignFunction = outer('secret1')
console.log(assignFunction)
assignFunction()

/* Double Braces Run */
outer('secret2')()
