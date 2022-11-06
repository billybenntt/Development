// --------- ES6: SET OBJECT  ---------
// Collection of unique values of any type

/* Create Empty Set */

const unique = new Set()

/* Add Values */
unique.add('First')
unique.add('First')
unique.add('Second')
unique.add('Third')
unique.add('Fourth')
unique.add(5)
unique.add('Sixth')
console.log(unique)

/* Delete Values */
console.log(unique.delete('Second'))
console.log(unique.delete('Second'))
console.log(unique)

/* Check if Value is in set */
console.log(unique.has('Third'))
