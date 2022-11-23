import subLinks from './data.js'

// ----------- SELECT ITEMS -----------

const toggleBtn = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close-btn')
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
/* Sidebar Links Container*/
const sidebarLinks = document.querySelector('.sidebar-links')
/* Links from the Navbar*/
const linkBtns = [...document.querySelectorAll('.link-btn')]
const subMenu = document.querySelector('.submenu')
const heroContainer = document.querySelector('.hero')
const navBar = document.querySelector('.nav')

// ----------- HELPER FUNCTIONS -----------

/* Function to Show the Sidebar*/
const showSidebar = () => {
  sidebarWrapper.classList.add('show')
}
/* Function to Hide the Sidebar*/
const closeSidebar = () => {
  sidebarWrapper.classList.remove('show')
}

/* Function to Display Items to the Sidebar*/
const displaySidebar = (subLinks) => {
  sidebarLinks.innerHTML = subLinks.map((item) => {
    const { page, links } = item

    const subLinks = links.map((item) => {
      const { url, icon, label } = item
      return `<a href="${url}"><i class="${icon}"></i>${label}</a>`
    }).join('')

    return `<article>
            <h4>${page}</h4>
              <div class="sidebar-sublinks">
               ${subLinks}
               </div>
           </article>`
  }).join('')
}
/* Function to Display Items to the Sidebar*/
const displaySubMenu = () => {
  linkBtns.forEach((item) => {

    item.addEventListener('mouseover', (event) => {
      const text = event.currentTarget.textContent
      /* Get Current Item Location */
      const itemLocation = event.currentTarget.getBoundingClientRect()
      const bottom = itemLocation.bottom - 3
      const center = (itemLocation.right + itemLocation.left) / 2


      /*Get Page Section from Text Content*/
      const tempPage = subLinks.find(({ page }) => page === text)

      if (tempPage) {
        
        /* Show Class and move absolute item with location data*/
        subMenu.classList.add('show')
        subMenu.style.left = `${center}px`
        subMenu.style.top = `${bottom}px`

      }

      console.log(tempPage)

    })

    item.addEventListener('mouseleave', (event) => {
      subMenu.classList.remove('show')
    })

  })
}

// ----------- EVENT LISTENERS AND FUNCTIONALITY  -----------

displaySidebar(subLinks)
displaySubMenu()

closeBtn.addEventListener('click', closeSidebar)
toggleBtn.addEventListener('click', showSidebar)

