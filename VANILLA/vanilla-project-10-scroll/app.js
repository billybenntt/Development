// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date')
const currentYear = new Date().getFullYear().toString()
date.innerText = currentYear

// ********** close links ************

const navToggleBtn = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggleBtn.addEventListener('click', () => {

  // Get Parent Container Height
  let parentLinksHeight = linksContainer.getBoundingClientRect().height
  // Get Child Container Height
  let childLinksHeight = links.getBoundingClientRect().height


  // Alternative to Class add method (Same Effect)

  /*if parent doesn't have any height  add it*/
  if (parentLinksHeight === 0) {
    linksContainer.style.height = `${childLinksHeight}px`
  } else {
      /*else if it already has height set it to 0 */
    linksContainer.style.height = `0px`
  }

})

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
