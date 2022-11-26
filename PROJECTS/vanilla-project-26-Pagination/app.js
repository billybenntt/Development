import fetchData from './src/fetchFollowers.js'
import displayFollowers from './src/displayFollowers.js'
import paginate from './src/paginate.js'
import displayButtons from './src/displayButtons.js'

// ---------- SELECT ELEMENTS ----------

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector(".btn-container")


let index = 2
let pages = []

// ---------- HELPER FUNCTIONS ----------

function setupUI () {
  displayFollowers(pages[index])
  displayButtons()

}

async function init () {
  const data = await fetchData()
  title.innerText = 'Pagination'

  pages = paginate(data)
  setupUI()

}

// ---------- EVENT LISTENERS  ----------

window.addEventListener('DOMContentLoaded', init)



