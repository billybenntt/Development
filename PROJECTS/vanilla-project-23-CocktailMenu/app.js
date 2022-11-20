import renderDrinks from './src/renderDrinks.js'
import './src/searchForm.js';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'



/*Render All Items Upon Loading Page */
window.addEventListener('DOMContentLoaded', () => {
  renderDrinks(url).then()
})




