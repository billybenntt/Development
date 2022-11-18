import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'

async function showDrinks (url) {

  // Fetch Drinks Data
  const data = await fetchDrinks(url)


// Display Drinks with Data
  const section = await displayDrinks(data)


}

export default showDrinks