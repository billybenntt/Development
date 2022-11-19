import presentDrinks from './src/showDrinks.js'
import './src/searchForm.js';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'



// -------------- UTILITY FUNCTIONS  --------------



// -------------- EVENT LISTENERS --------------

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(url).then()

})




