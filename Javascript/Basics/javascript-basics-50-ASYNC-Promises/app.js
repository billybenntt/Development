// ------------- SELECT ITEMS -------------

const btn = document.querySelector('.btn')

// ------------- PROMISE HANDLING -------------

btn.addEventListener('click', () => {

  /* Decision Maker */
  let value = false

  /* Promise Creation */

  const promise = new Promise((resolve, reject) => {
    if (value) {
      resolve([1, 1, 1, 1, 1, 1, 1])
    } else {
      reject(['X', 'X', 'X', 'X', 'X', 'X'])
    }
  })

  /*Promise Handling - Then -> Resolved */
  /*Promise Handling - Catch -> Rejected */

  promise.then((value) => {
    console.log('Promise Resolved')
    console.log(value)
  }).catch((value) => {
    console.log('Promise Rejected')
    console.log(value)
  })

})

