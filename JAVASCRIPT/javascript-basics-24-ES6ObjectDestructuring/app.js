// --------- OBJECT DESTRUCTURING - ASSIGNING  ---------

const bob = {
  first: 'Bob',
  last: 'Sanders',
  city: 'Chicago',
  siblings: {
    sister: 'Juana'
  }
}

/* Old Way */
// const firstName = bob.first
// const lastName = bob.last
// const sisterName = bob.siblings.sister

/* Method 1 - Variable needs to match property name */
const { first, last, city, siblings: { sister } } = bob
console.log(first, last, city, sister)

/* Method 2 - Alias assignment */
const { first: firstName, last: lastName, city: cityName } = bob
console.log(firstName, lastName, cityName)

/* Method 3 - Nested Property */
const { siblings: { sister: laHermana } } = bob
console.log(laHermana)

