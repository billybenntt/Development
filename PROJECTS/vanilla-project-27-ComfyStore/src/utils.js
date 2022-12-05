const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product



// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'


const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

// ---------- UTILITY FUNCTIONS  ----------

/* Get DOM Element  */

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

/* Get Data from Local Storage */
const getStorageItem = (name) => {
  let storageItem = JSON.parse(localStorage.getItem(name)) || false
  return storageItem ? storageItem : []
}

/* Save Data to Local Storage */
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}

/* Get formatted price */
const formatPrice = (price) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD'
  })
  const newPrice = price / 100
  return currency.format(newPrice)
}
// ---------- EXPORTS ----------

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
