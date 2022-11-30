import { getElement } from './utils.js'

// ---------- SELECT ELEMENTS ----------

const toggleNav = getElement('.toggle-nav')
const sidebarClose = getElement('.sidebar-close')
const sidebarOverlay = getElement('.sidebar-overlay')

// ---------- EVENT LISTENERS ----------



/* Show Sidebar*/
toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show')
})

/* Close  Sidebar*/
sidebarClose.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show')
})

