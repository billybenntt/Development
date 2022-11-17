// ------------- SELECT ITEMS -------------

const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.as')
const btn = document.querySelector('.btn')

// ------------- PROMISES HANDLING/CHAINING  -------------

btn.addEventListener('click', async () => {

  /* Chaining all promises with await */
  try {
    /* The Resolved Values will be handled  here */

    await addColor(heading1, 1000, 'red')
    await addColor(heading2, 2000, 'blue')
    await addColor(heading3, 1000, 'green')
  } catch (error) {

    /* The Reject Value will appear here */
    console.log(error)

  }

})

// ------------- PROMISES DECLARATION  -------------

/* Returns a resolved promise everytime the element is successfully changed*/

function addColor (element, time, color) {

  return new Promise((resolve, reject) => {

    /* Resolved Promise*/
    if (element) {
      setTimeout(() => {
        element.style.color = color
        console.log('Promise Resolved')
        resolve()
      }, time)
    }
    /*Rejected Promise */
    else {
      console.log('Promise Rejected')
      reject(new Error(`There is no such element ${element}`))
    }
  })

}