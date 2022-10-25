// ------  FACTORY OBJECT FUNCTIONS -------------

function personFactory (firstName, lastName) {

  return {
    firstName,
    lastName,
    fullName () {
      return `My full name is ${this.firstName} ${this.lastName}!`
    }

  }
}

const bobGuy = personFactory('Bob', 'Rancher')
const weichengGuy = personFactory('Wei', 'Cheng')


console.log(bobGuy.fullName())
console.log(weichengGuy.fullName())