import fetchData from './src/fetchFollowers.js'
import displayFollowers from './src/displayFollowers.js'
import paginate from './src/paginate.js'
import displayButtons from './src/displayButtons.js'




// ---------- HELPER FUNCTIONS ----------


async function init () {

  const data = await fetchData()

  console.log(data)

}




// ---------- EVENT LISTENERS  ----------


window.addEventListener("DOMContentLoaded", init)



