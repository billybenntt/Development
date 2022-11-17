// --------- ES6: SPREAD OPERATOR ... ARRAYS  ---------
// Allows an iterable to spread/expand individually inside receiver
// Split items into single items and copy them
// Iterable -> String, Array, Node list, Map, Set
// Array Receiver = []

const platform = 'udemy'
const guys = ['Pepe', 'Ranch', 'Sony', 'Lucas']
const girls = ['Paula', 'Julia', 'Juana']
const bestDude = 'arnoldo'

/* Convert string into array using spread */
const letterSpread = [...platform]
console.log(letterSpread)

/* Convert string into array using split */
const letterSplit = platform.split('')
console.log(letterSplit)

/* Assign 2 arrays and one string */
const friendsList = [guys, girls, bestDude]
console.log(friendsList)

/*Assign all elements into single flat array */
const friendsListSpread = [...girls, ...guys, bestDude]
console.log(friendsListSpread)

/* Assigning to Same Memory Location */
// const newFriendsMutable = friendsListSpread

/* Make a copy of the array to prevent mutation */
const newFriendsMutable = [...friendsListSpread]

newFriendsMutable[2] = "Simone"
console.log(newFriendsMutable)
console.log(friendsListSpread)

