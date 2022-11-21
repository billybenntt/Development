import data from './src/data.js'

// -------------- SELECT ITEMS --------------

const slideContainer = document.querySelector('.slide-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// -------------- HELPER FUNCTIONS  --------------

/* Function to Display Items to DOM*/

const displayData = (data) => {
  const peopleData = data.map((item, slideIndex) => {
    const { img, name, job, text } = item

    /* Assign Middle Slides .next Class
   Assign First Slide .active Class
   Assign Last Slide .last Class */

    let position = 'next'
    if (slideIndex === 0) {
      position = 'active'
    }
    if (slideIndex === data.length - 1) {
      position = 'last'
    }

    /* Return Single Article for Each Item*/
    return `<article class="slide ${position}">
                <img src="${img}" alt="user image" class="img ">
                <h4>${name}</h4>
                <p class="title">${job}</p>
                <p class="text">${text}</p>
            </article>`
  })

  slideContainer.innerHTML = peopleData.join('')
}

/* Function to Run Carrousel */

const startSlider = (type) => {
  /* Select  all three slides active,last next */
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  if (!next) {
    next = slideContainer.firstElementChild
  }

  /* Remove Classes to Reset*/
  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')

  /* Prev Functionality */
  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling

    if (!next) {
      next = slideContainer.lastElementChild
    }

    next.classList.remove('next')
    next.classList.add('last')
    return
  }

  /* Next Functionality */
  if (type === 'next') {
    active.classList.add('last')
    last.classList.add('next')
    next.classList.add('active')
  }

}

// -------------- EVENT LISTENERS  --------------

window.addEventListener('DOMContentLoaded', () => {
  displayData(data)
})

nextBtn.addEventListener('click', () => {
  startSlider('next')
})

prevBtn.addEventListener('click', () => {
  startSlider('prev')
})

