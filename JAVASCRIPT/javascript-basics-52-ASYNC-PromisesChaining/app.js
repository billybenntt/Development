// ------------- SELECT ITEMS -------------

const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const btn = document.querySelector('.btn')

// ------------- PROMISES HANDLING/CHAINING  -------------

btn.addEventListener('click', () => {

  /* Chaining all promises with then */
  addColor(heading1, 1000, 'red').then(() =>
    addColor(heading2, 2000, 'green')).then(() =>
    addColor(heading3, 1000, 'blue')).catch((value) => console.log(value))
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