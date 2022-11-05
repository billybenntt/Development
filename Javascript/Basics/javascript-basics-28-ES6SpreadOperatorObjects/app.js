// --------- ES8: SPREAD OPERATOR ... OBJECTS  ---------
// Allows an iterable to spread/expand individually inside receiver
// Split items into single items and copy them
// Iterable -> String, Array, Node list, Map, Set, Objects (ES8)
// Object Receiver = { }

/*Original Object */

let person = {
  firstName: 'Bobby',
  lastName: 'Singer',
  job: 'Hunter'
}
console.log(person)

/* Update multiple properties*/
person = { ...person, lastName: 'Chavez', job: 'Lawyer' }
console.log(person)


/* Add new Property */
person = {...person, income: "1000USD"}
console.log(person)