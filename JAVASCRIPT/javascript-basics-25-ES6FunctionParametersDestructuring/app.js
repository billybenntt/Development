// --------- FUNCTION PARAMETERS DESTRUCTURING  ---------

const bob = {
  first: 'Bob',
  last: 'Sanders',
  city: 'Chicago',
  siblings: {
    sister: 'Juana'
  }
}

/*Get Everything  */

function printEverything (bob) {
  const {first, last, city, siblings:{sister}} = bob
   console.log(`${first} and ${last} and ${city} and ${sister}`)
}
printEverything(bob)



/*Get Certain Properties */
function printName ({first, last}) {
  console.log(`${first} and ${last}`)
}
printName(bob)


