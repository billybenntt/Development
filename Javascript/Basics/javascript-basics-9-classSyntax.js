// -------------  ES6 Classes - Declaration -------------
// Syntactic Sugar for constructor function

class Account {
  //  Parameters here
  constructor (name, initialBalance) {
    this.name = name
    this.balance = initialBalance

  }

  //  Additional Variables
  bankCode = '18289023810A2'

  //   Methods here
  deposit (amount) {
    this.balance += amount
    return `Hello ${this.name} your Balance is ${this.balance} Code ${this.bankCode}`
  }

}

// -------------  ES6 Classes - Prototypes  -------------

Account.prototype.bankName = 'Bank of America'
Account.prototype.showBankName = function () {
  return `This is the ${this.bankName}`
}

// -------------  ES6 Classes - Instantiation  -------------

const john = new Account('John', 2000)
const charlie = new Account('Charles', 5000)

/* Instantiation with constructor keyword */
const vlad = new john.constructor('Vlad', 30000)


/* Show Results */
console.log(john.deposit(200))
console.log(john.showBankName())
console.log(charlie.deposit(2300))
console.log(charlie.showBankName())
console.log(vlad.deposit(3333))
console.log(vlad.showBankName())