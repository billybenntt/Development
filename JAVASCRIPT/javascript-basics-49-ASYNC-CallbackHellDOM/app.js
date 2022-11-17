// ------------- SELECT ITEMS -------------

const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const btn = document.querySelector('.btn')

// ------------- CALLBACK HELL  -------------
/* This was done before promises were introduced */

btn.addEventListener('click', () => {

  setTimeout(() => {
    heading1.style.color = 'red'
    setTimeout(() => {
      heading2.style.color = 'green'
      setTimeout(() => {
        heading3.style.color = 'blue'
      }, 1000)
    }, 2000)
  }, 1000)

})

