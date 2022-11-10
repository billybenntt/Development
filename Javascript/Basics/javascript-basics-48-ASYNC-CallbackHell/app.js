// -------------- CALLBACK HELL   --------------

// 1. Boil Water 10 Minutes
// 2. Chop Carrots
// 3. Add Carrots, Boil 5 Minutes
// 4. Chop Onion
// 5. Add Onion, Boil 5 Minutes

boilWater()
console.log(2, 'Chop Carrots')

function boilWater () {

  console.log(1, 'Boiling....')
  /*Start Boiling */
  setTimeout(() => {
      console.log(3, 'Done Boiling.')
      console.log(4, 'Add Carrots.')

      /*Start Boiling Carrots  */
      setTimeout(() => {
        console.log(6, 'Carrots Done.')

        /*Start Boiling  Onions*/
        setTimeout(() => {
          console.log(7, 'Onions Done')
        }, 5000)

      }, 5000)

      console.log(5, 'Chop Onion')

    }, 10000
  )
}