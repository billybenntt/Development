import fetchData from './fetchData.js'
import displaySingleDrink from './displaySingleDrink.js'

/*Endpoint for ID Search*/
const baseURl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


/* Function to Render Single Drink Data*/
const singleDrink = async () => {
  const id = localStorage.getItem('drink')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const data = await fetchData(`${baseURl}${id}`)
    displaySingleDrink(data)
  }

}

/* Load Function upon loading page */
window.addEventListener('DOMContentLoaded', singleDrink)