// --------- ARROW FUNCTION OBJECTS & this  ---------

// Normal Function - Refers Parent, Left of Dot
// Arrow Function - Refers to its current surrounding Scope (Global Scope)




/* Normal function - Refers to Current Object */
const bob = {
  firstName: 'Bob',
  lastName: 'Smith',
  sayName: function () {
    setTimeout( () =>{
      console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    }, 2000)
  }

}

/* Arrow function - Refers to Window Object */
const anna = {
  firstName: 'Anna',
  lastName: 'Sanders',
  sayName: () => {
    console.log(this)
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
  }
}

bob.sayName()
