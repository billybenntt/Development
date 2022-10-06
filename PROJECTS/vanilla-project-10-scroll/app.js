// ------------------------------ DYNAMIC DATE ------------------------------


const date = document.getElementById('date')
const currentYear = new Date().getFullYear().toString()
date.innerText = currentYear

// ------------------------------ DYNAMIC MENU ITEMS------------------------------

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

// ------------------------------ SCROLL STYLES ------------------------------

const navbarElement = document.getElementById('nav')
const topLinkBtn = document.querySelector('.top-link')

window.addEventListener('scroll', () => {

  // Get the threshold Y Coordinate
  if (window.scrollY >= 100) {
    navbarElement.classList.add('fixed-nav')
    topLinkBtn.classList.add('show-link')
  } else {
    navbarElement.classList.remove('fixed-nav')
    topLinkBtn.classList.remove('show-link')
  }
})

// ------------------------------ SCROLL RESPONSIVE ------------------------------

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {

  // Attach event Listeners to all the links
  link.addEventListener('click', (event) => {

    // Calculate Height
    const navbarHeight = navbarElement.getBoundingClientRect().height
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    // Check if Navbar has fixed class
    const isNavbarFixed = navbarElement.classList.contains('fixed-nav')
    // Prevent Default Link Clicking/Redirecting
    event.preventDefault()



    // Extract the href value from the clicked element without "#"
    const id = event.currentTarget.getAttribute('href').slice(1)
    // Look for the Clicked Section element
    const element = document.getElementById(id)


    // Off Set Adjustments

    let elementPosition = element.offsetTop - navbarHeight

    if (!isNavbarFixed) {
      elementPosition = elementPosition - navbarHeight
    }
    if (navbarHeight > 82) {
      elementPosition = elementPosition + linksContainerHeight
    }



    // Scroll to the position by passing data object
    window.scrollTo({ left: 0, top: elementPosition })
    // Close the Menu Container
    linksContainer.style.height = `0px`

  })

})

