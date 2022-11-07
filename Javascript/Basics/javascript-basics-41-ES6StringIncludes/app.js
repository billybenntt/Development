// --------- ES6: STRING INCLUDES METHOD  ---------
// Check if a string includes another substring

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather chair' }
]

const firstName = 'John'
const longName = 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff';
const searchText = 'chair'.toLowerCase();

/* Check if substring is contained inside string */
console.log(firstName.includes('oh'))

/* Check if substring is contained inside string */
console.log(firstName.includes('peter'))

/* Check if substring is contained after position 1*/
console.log(longName.includes('hausenberg', 1))

/* Check if substring is contained after position 40*/
console.log(longName.includes('hausenberg', 40))

/* Return Items that Meet the Search Criteria */
const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(searchText))
console.log(filteredProducts)


