import { getElement } from '../utils.js'
import display from '../displayProducts.js'

// ---------- SELECT ELEMENTS  ----------

const priceInput = getElement('.price-filter')
const priceValue = getElement('.price-value')
const productsContainer = getElement('.products-container')
const noItems = 'Sorry, no products match your search'



// ---------- HELPER FUNCTIONS ----------

const setupPrice = (store) => {

  /* Get List of Prices and Max value*/
  const prices = [...new Set(store.map(item => item.price))]
  const maxPrice = Math.ceil(Math.max(...prices) / 100)

  /* Set DOM Static values from result */
  priceInput.value = maxPrice
  priceInput.max = maxPrice
  priceInput.min = 0
  priceValue.innerText = `Value $${maxPrice}`

  /* Add Event Listener on input change and filter values */
  priceInput.addEventListener('input', () => {
    const rangeValue = parseInt(`${priceInput.value}`)
    priceValue.innerText = `Value $${rangeValue}`
    let filterStore = store.filter((item) => item.price / 100 <= rangeValue)
    display(filterStore, productsContainer)
    if (filterStore.length < 1) {
      productsContainer.innerHTML = `<h3 class="filter-error">${noItems}</h3>`
    }
  })

}

export default setupPrice
