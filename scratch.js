const topSix = [
  { name: 'Nigeria', position: '1st', points: 43 },
  { name: 'England', position: '2nd', points: 37 },
  { name: 'USA', position: '3rd', points: 35 },
  { name: 'South Africa', position: '4th', points: 30 },
  { name: 'Brazil', position: '5th', points: 27 },
  { name: 'Korea', position: '6th', points: 23 },
  { name: 'South Africa', position: '4th', points: 30 },
]


// The Accumulator is initialized with an Array that contains "InitialValue"
const getUniqueValues = topSix.reduce((accumulator, currentItem)=>{
  // IF the Accumulator array doesn't have the item inside the object then add it
  if (!accumulator.includes(currentItem.name)){
    accumulator.push(currentItem.name)
  }
  // Once done Return the accumulator array.
  return accumulator
},["InitialValue"])

console.log(getUniqueValues)