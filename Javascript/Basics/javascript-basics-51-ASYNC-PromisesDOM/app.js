// ------------- SELECT ITEMS -------------

const url = 'https://source.unsplash.com/featured/'
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const imageContainer = document.querySelector('.img-container')
const btn = document.querySelector('.btn')

// ------------- PROMISES HANDLING  -------------

btn.addEventListener('click', () => {

  loadImage(url).then((value) => {
    console.log(value)
  }).catch((value) => {
    console.log(value)
  })

})

// ------------- PROMISES DECLARATION  -------------

function loadImage (url) {

  const promise = new Promise((resolve, reject) => {

  })
  console.log(promise)
  return promise
}
