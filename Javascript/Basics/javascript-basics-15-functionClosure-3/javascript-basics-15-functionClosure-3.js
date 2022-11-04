// ----------------  FUNCTION CLOSURES 3  ----------------

function newAccount (name, initialBalance) {

  let balance = initialBalance

  function showBalance () {
    console.log(`Hey ${name}, your balance is ${balance}`)
  }

  function deposit (amount) {
    balance += amount
    console.log('Deposit')
    showBalance()
  }

  function withdraw (amount) {
    if (amount > balance) {
      console.log(`Sorry Bro not enough balance`)
      return
    }
    console.log('Withdraw')
    balance -= amount
    showBalance()
  }

  /* Return Method using shorthand*/
  return { showBalance, deposit, withdraw }
}

newAccount('Bob', 1000)

/*Assign Object to Variable  */
const susan = newAccount('Susana', 3131)
const john = newAccount('John', 13343)

susan.showBalance()
susan.deposit(100)
susan.withdraw(333)
john.showBalance()