import fetchData from './src/fetchFollowers.js'
import displayFollowers from './src/displayFollowers.js'
import paginate from './src/paginate.js'
import displayButtons from './src/displayButtons.js'

// ---------- SELECT ELEMENTS ----------

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')
let index = 0
let pages = []

// ---------- HELPER FUNCTIONS ----------

function setupUI () {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

async function init () {
  /*Get data from API */
  const data = await fetchData()
  /* Once data is fetched show Pagination Text*/
  title.innerText = 'Pagination'
  /* Pass data and return sliced-paginated arrays */
  pages = paginate(data)
  /* Display Paginated Data on N Index */
  setupUI()
}

// ---------- EVENT LISTENERS  ----------


window.addEventListener('load', init)

btnContainer.addEventListener('click', (event) => {
  /* Save Rendering */
  if (event.target.classList.contains('btn-container')) return
  /*Indexed Buttons */
  if (event.target.classList.contains('page-btn')) {
    index = parseInt(event.target.dataset.index)
  }
  /*Prev Button */
  if (event.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  /* Next Button */
  if (event.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})



