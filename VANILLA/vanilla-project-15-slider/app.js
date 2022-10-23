// ----- SELECT ITEMS --------------------------------

const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

// ----- GENERAL   --------------------------------

let counter = 0

prevBtn.style.display = 'none'

// ----- APPLY STYLES  --------------------------------

/* Same Effect as CSS Manual*/
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

// ----- FUNCTION  --------------------------------

function carousel () {

  /* Method 1 - Counter Loop */

  // if (counter === slides.length) {
  //   counter = 0
  // }
  // if (counter < 0 ) {
  //   counter = slides.length - 1
  // }

  /* Method 2 - Hide/Show Button */

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }
  if (counter > 0) {
    prevBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

// ----- EVENT LISTENERS --------------------------------

nextBtn.addEventListener('click', () => {
  counter++
  carousel()
})

prevBtn.addEventListener('click', () => {
  counter--
  carousel()

})
