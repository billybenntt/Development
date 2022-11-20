import getElement from './getElement.js'
import { hideLoading } from './toggleLoading.js'

async function displayDrinks ({ drinks: data }) {

  const title = getElement('.title')
  const section = getElement('.section-center')

  if (!data) {
    // No Data we display title
    title.innerText = 'Sorry No Drinks'
    // Remove data from Container
    section.innerHTML = null

    hideLoading()

    return
  }

  const newDrinks = data.map((item) => {
    if (!item) return
    const {
      strDrink: drinkName,
      strDrinkThumb: drinkImg,
      idDrink: drinkID
    } = item
    return `<a href="drink.html" target="_blank">
                <article class="cocktail" data-id="${drinkID}">
                    <img src="${drinkImg}" alt="${drinkName}">
                    <h3>${drinkName}</h3>
                </article>
            </a>`
  })

  title.innerText = null
  section.innerHTML = newDrinks.join('')
  hideLoading()
  // Hide Loading
  return section
}

export default displayDrinks