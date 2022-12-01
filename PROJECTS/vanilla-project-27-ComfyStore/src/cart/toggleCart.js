import { getElement } from '../utils.js'

// ---------- SELECT ELEMENTS ----------

const cartOpenBtn = getElement('.toggle-cart')
const cartCloseBtn = getElement('.cart-close')
const cartOverlay = getElement('.cart-overlay')

// ---------- REUSABLE FUNCTION  ----------

export const openCart = () => {
  cartOverlay.classList.add('show')
}


// ---------- EVENT LISTENERS ----------

/* Show Cart */
cartOpenBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show')
})

/* Close Cart */
cartCloseBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show')
})


