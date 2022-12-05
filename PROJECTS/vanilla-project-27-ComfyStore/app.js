// Global Imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'
import './src/cart/setupCart.js'

// Specific Imports
import fetchProducts from './src/fetchProducts.js'
import { setupStore, store } from './src/store.js'
import display from './src/displayProducts.js'
import { getElement } from './src/utils.js'

// ---------- HELPER FUNCTION  ----------

const featuredContainer = getElement('.featured-center')


// ---------- HELPER FUNCTION  ----------

const init = async () => {

  const data = await fetchProducts()
  if (data) {
    /*Add products to the store*/
    setupStore(data)
    /* Get featured Items */
    const featured = store.filter((item) => item.featured)
    /*Display to DOM*/
    display(featured, featuredContainer)
  }

}

// ---------- EVENT LISTENERS ----------

window.addEventListener('DOMContentLoaded', init)