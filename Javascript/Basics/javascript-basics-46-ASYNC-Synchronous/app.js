// -------------- SYNCHRONOUS EXAMPLE --------------

/* Everything happens line by line */
boilWater(10000)
console.log('Chop Carrots')
boilWater(5000)
console.log('Chop Onion')
boilWater(5000)

// -------------- HOISTED FUNCTION  --------------

function boilWater (time) {
  console.log('Boiling....')
  for (let i = 0; i < time; i++) {
    console.log('Still Not Done')
  }
  console.log('Done')
}

