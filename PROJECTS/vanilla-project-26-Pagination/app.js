import fetchData from './src/fetchFollowers.js'
import displayFollowers from './src/displayFollowers.js'
import paginate from './src/paginate.js'
import displayButtons from './src/displayButtons.js'

// ---------- SELECT ELEMENTS ----------

const title = document.querySelector('.section-title h1')

// ---------- HELPER FUNCTIONS ----------

async function init () {

  const data = await fetchData()
  title.innerText = 'Pagination'

  displayFollowers(data)

}

// ---------- EVENT LISTENERS  ----------

window.addEventListener('DOMContentLoaded', init)



