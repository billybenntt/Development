// PARENT CLASS - DECLARATION

class Person {
  constructor (name) {
    this.name = name
  }
  walk () {
    console.log(`${this.name} starts walking`)
  }

  talk () {
    console.log(`${this.name} starts talking`)
  }
}

// CHILD CLASS - INHERITANCE

class Doctor extends Person {
  heal () {
    console.log(`${this.name} heals you by 10 points`)
  }
}


// OBJECT - DECLARATION

const character1 = new Person('Bob')
character1.walk()
character1.talk()


const doctor1 = new Doctor('Kane')
doctor1.walk()
doctor1.talk()
doctor1.heal()