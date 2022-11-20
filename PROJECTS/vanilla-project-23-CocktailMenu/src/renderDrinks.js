import fetchData from './fetchData.js'
import displayDrinks from './displayDrinks.js'
import setDrink from './setDrink.js'


/* Function to Render Data */
async function renderDrinks (url) {
  // Fetch Drinks Data
  const data = await fetchData(url)
// Display Drinks with Data
  const section = await displayDrinks(data)

// Attach Event Listener to Dynamically Created Section
  if (section) {
    setDrink(section)
  }

}

export default renderDrinks