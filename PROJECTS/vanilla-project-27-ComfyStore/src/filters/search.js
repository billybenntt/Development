import { getElement } from '../utils.js'
import display from '../displayProducts.js'

// ---------- SELECT ELEMENTS  ----------

const formContainer = getElement('.input-form')
const searchInput = getElement('.search-input')
const productsContainer = getElement('.products-container')
const noItems = "Sorry, no products match your search"


// ---------- HELPER FUNCTIONS ----------

const setupSearch = (store) => {

  formContainer.addEventListener('keyup', () => {

    let searchValue = searchInput.value.toLowerCase()

    if (searchValue) {
      let filterStore = store.filter((item) => {
        const { name } = item
        return name.includes(searchValue)
      })
      display(filterStore, productsContainer)

      if (filterStore.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error">${noItems}</h3>`
      }

    } else {
      display(store, productsContainer)
    }

  })

}

export default setupSearch
