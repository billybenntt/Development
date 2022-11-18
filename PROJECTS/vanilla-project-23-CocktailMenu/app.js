import showDrinks from './src/showDrinks.js'
import './src/searchForm.js';




// -------------- UTILITY FUNCTIONS  --------------

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

// -------------- EVENT LISTENERS --------------

window.addEventListener('DOMContentLoaded', () => {
  showDrinks(url).then()

})




