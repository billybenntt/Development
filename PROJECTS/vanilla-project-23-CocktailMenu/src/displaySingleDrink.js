import { hideLoading } from './toggleLoading.js'
import getElement from './getElement.js'

/* Select Elements */
const drinkName = getElement('.drink-name')
const drinkDescription = getElement('.drink-description')
const drinkImage = getElement('.drink-img')
const drinkIngredients = getElement('.drink-ingredients')

const displaySingleDrink = ({ drinks: [drink] }) => {
  /* Hide Loading Container */
  hideLoading()
  /* Get Destructured Values */
  const {
    strDrinkThumb: imageURL,
    strDrink: name,
    strInstructions: recipe,
  } = drink

  /* Get Non-Null Ingredients and Create HTMl String */
  let ingredients = []
  for (const item in drink) {
    if (item.includes('strIngredient') && drink[item] !== null) {
      ingredients.push(drink[item])
    }
  }
  ingredients = ingredients.map((item) => {
    return `<li><i class="far fa-check-square"></i>${item}</li>`
  }).join("")

  /* Assign Values to DOM*/
  drinkImage.src = imageURL
  drinkName.innerText = name
  drinkDescription.innerText = recipe
  drinkIngredients.innerHTML = ingredients
}

export default displaySingleDrink