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
const cartItemsDOM = getElement('.cart-items')
const cartTotalDOM = getElement('.cart-total')

/* Get Local Storage Cart - Read/Write */
let cart = getStorageItem('cart')

// ---------- HELPER FUNCTION  ----------

/* Show Item Count */
const displayCartItemCount = () => {
  const amount = cart.reduce((total, currentItem) => {
    return total += currentItem.amount
  }, 0)
  cartItemCountDOM.innerText = amount
}

/* Show Items Total Count  */
const displayCartTotal = () => {
  let total = cart.reduce((total, currentItem) => {
    return total += currentItem.price * currentItem.amount
  }, 0)
  cartTotalDOM.innerText = `Total: ${formatPrice(total)}`
}

function removeItem (id) {
  /* Return Items that do not match id */
  cart = cart.filter((item) => item.id !== id)

  
}

/* Add event Listeners to Cart Items buttons */
const setupCartFunctionality = () => {
  cartItemsDOM.addEventListener('click', (event) => {
    /* For Remove Button  */
    const element = event.target
    const elementID = event.target.dataset.id

    /* For Up/Down Arrow Buttons  */
    const parent = event.target.parentElement
    const parentID = event.target.parentElement.dataset.id

    /* Remove Item*/
    if (element.classList.contains('cart-item-remove-btn')) {
      console.log('remove', elementID)
      removeItem(elementID)

    }

    if (parent.classList.contains('cart-item-increase-btn')) {
      console.log('increase', parentID)
    }

    if (parent.classList.contains('cart-item-decrease-btn')) {
      console.log('decrease', parentID)
    }

    /* Increase Count */
    /* Decrease Count */

    /* Sync and Update Values */
    displayCartItemCount()
    displayCartTotal()
    setStorageItem('cart', cart)

  })

}

const increaseAmount = (id) => {
  let newAmount
  /* Edit Object */
  cart = cart.map((cartItem) => {
    newAmount = cartItem.amount + 1
    /* IF ID matches modify object amount */
    if (cartItem.id === id) {
      cartItem = { ...cartItem, amount: newAmount }
    }
    /* Return as It is */
    return cartItem
  })
  return newAmount
}

/* Display Items to Cart from LocalStorage*/
const displayCartItemsDOM = () => {
  cart.forEach((item) => {
    addToCartDOM(item)
  })
}

/* Add Items Upon Passing ID and Initializing Functions */
export const addToCart = (id) => {
  /* Check if Item not in the cart */
  let item = cart.find((cartItem) => cartItem.id === id)
  /* HANDLE NEW ITEMS */
  if (!item) {
    let product = findProduct(id)
    /* Add additional property to item */
    product = { ...product, amount: 1 }
    /*Update item to cart + everything else */
    cart = [...cart, product]
    addToCartDOM(product)
  } else {
    /*UPDATE EXISTING ITEMS */
    const amount = increaseAmount(id)
    /* Get Array from Node List  */
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')]
    /* Get Selected Item */
    const newAmount = items.filter((item) => item.dataset.id === id)
    /* Modify DOM */
    newAmount[0].innerText = amount
  }

  /* Add 1 To Item Count */
  displayCartItemCount()
  /* Display Cart Totals */
  displayCartTotal()
  /* Set Cart in Local Storage */
  setStorageItem('cart', cart)
  openCart()
}

/* Initialize Functions upon Loading */
const init = () => {
  /* Display Amount of Cart Items */
  displayCartItemCount()
  /* Display Cart Total */
  displayCartTotal()
  /* Render items to DOM */
  displayCartItemsDOM()
  setupCartFunctionality()
}

init()





