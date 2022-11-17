// ------------- SELECT ITEMS -------------

const url = 'https://source.unsplash.com/featured/'
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const imageContainer = document.querySelector('.img-container')
const btn = document.querySelector('.btn')

// ------------- PROMISES HANDLING  -------------

btn.addEventListener('click', () => {

  /*Check Promise Status */
  console.log(loadImage(url))

  /* Handle Promise Values */
  loadImage(url).then((value) => {

    if (imageContainer.childElementCount < 1) {
      imageContainer.appendChild(value)
    }

  }).catch((value) => {
    console.log(value)
  })

})

// ------------- PROMISES DECLARATION  -------------

function loadImage (url) {

  return new Promise((resolve, reject) => {

    /* Value to be returned */
    let img = new Image()
    img.src = url

    /* Resolve is the image loads */
    img.addEventListener('load', () => {
      resolve(img)
    })

    /* Reject is the image does not load and there is an error */
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image ${url}`))
    })

  })
}
