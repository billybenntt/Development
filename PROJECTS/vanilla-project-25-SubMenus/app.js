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
const displaySubMenu = (subLinks) => {
  linkBtns.forEach((item) => {

    item.addEventListener('mouseover', (event) => {
    })



    item.addEventListener('mouseleave', (event) => {
    })

  })
}

// ----------- EVENT LISTENERS AND FUNCTIONALITY  -----------

displaySidebar(subLinks)
displaySubMenu()

closeBtn.addEventListener('click', closeSidebar)
toggleBtn.addEventListener('click', showSidebar)