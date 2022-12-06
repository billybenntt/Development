// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js'

import { openCart } from './toggleCart.js'
import { findProduct } from '../store.js'
import addToCartDOM from './addToCartDOM.js'
// set items

// ---------- SELECT ELEMENTS  ----------

const cartItemCountDOM = getElement('.cart-item-count')
const cartItemDOM = getElement('.cart-items')
const cartTotalDOM = getElement('.cart-total')

let cart = getStorageItem("cart")



// ---------- HELPER FUNCTION  ----------


export const addToCart = (id) => {
  console.log(id)
  console.log(cartItemCountDOM.innerText)
  openCart()
}

const init = () => {
  console.log(cart)
}


init()