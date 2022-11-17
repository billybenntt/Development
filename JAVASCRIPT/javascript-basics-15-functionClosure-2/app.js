// ----------------  FUNCTION CLOSURES 2  ----------------

function newAccount (name, initialBalance) {

  let balance = initialBalance

  function showBalance () {
    console.log(`Hey ${name}, your balance is ${balance}`)
  }

  return showBalance
}

/*Call function immediately */
newAccount('Bob', 1000)()


/*Assign Function and Call  */
const susan = newAccount('Susana', 3131)
const john = newAccount('John', 13343)

susan()
john()