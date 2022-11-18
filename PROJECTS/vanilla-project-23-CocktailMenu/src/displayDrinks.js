import getElement from './getElement.js'

/*this function transforms the data into a long string*/

async function displayDrinks ({ drinks: data }) {

  const title = getElement('.title')
  const section = getElement('.section-center')

  if (data.length === 0) {
    // No Data we display title
    title.innerText = 'Sorry No Drinks'
    // Remove data from Container
    section.innerHTML = null
  }



  const newDrinks = data.map((item) => {
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

  section.innerHTML = newDrinks.join('')

  // Hide Loading

  return section
}

export default displayDrinks