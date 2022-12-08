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

let cart = getStorageItem('cart')

// ---------- HELPER FUNCTION  ----------


/* Show Item Count */
const displayCartItemCount = () => {
  const amount = cart.reduce((total, currentItem) => {
    return total += currentItem.amount
  }, 0)
  console.log(amount)
  cartItemCountDOM.innerText = amount
}

/* Show Items Total Count  */
const displayCartTotal = () => {
  let total = cart.reduce((total, currentItem) => {
    return total += currentItem.price * currentItem.amount
  }, 0)
  cartTotalDOM.innerText = `Total: ${formatPrice(total)}`
}


const setupCartFunctionality = () => {

}

const displayCartItemsDOM = () => {

  cart.forEach((item) =>{

    addToCartDOM(item)

  })

}




export const addToCart = (id) => {
  /* Check if Item not in the cart */
  let item = cart.find((cartItem) => cartItem.id === id)
  /* Item not in cart, get the product */
  if (!item) {
    let product = findProduct(id)
    /* Add additional property to item */
    product = { ...product, amount: 1 }
    /*Update item to cart + everything else */
    cart = [...cart, product]
    addToCartDOM(product)
  } else {
    /*Update Values */

  }
  /* Add 1 To Item Count */
  displayCartItemCount()
  /* Display Cart Totals */
  displayCartTotal()
  /* Set Cart in Local Storage */

  displayCartItemsDOM()
  

  setStorageItem('cart', cart)
  openCart()
}

const init = () => {

  /* Display Amount of Cart Items */
  displayCartItemCount()
  /* Display Cart Total */
  displayCartTotal()



  console.log(cart)
}

init()
