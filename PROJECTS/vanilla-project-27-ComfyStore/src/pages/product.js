// global imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setupCart.js'
// specific
import { formatPrice, getElement, singleProductUrl } from '../utils.js'
import display from '../displayProducts.js'
import { addToCart } from '../cart/setupCart.js'

// ---------- SELECT ELEMENTS  ----------

const loading = getElement('.page-loading')
const centerDOM = getElement('.single-product-center')
const pageTitleDOM = getElement('.page-hero-title')
const imgDOM = getElement('.single-product-img')
const titleDOM = getElement('.single-product-title')
const companyDOM = getElement('.single-product-company')
const priceDOM = getElement('.single-product-price')
const colorsDOM = getElement('.single-product-colors')
const descDOM = getElement('.single-product-desc')
const cartBtn = getElement('.addToCartBtn')

// cart product
let productID

const errorMessage = `<div><h3 class="error">Sorry, something went wrong</h3>
                       <a href="index.html" class="btn">Tell Fred</a></div>`

// ---------- HELPER FUNCTION  ----------


/* Function to Fetch Data from API */
async function getData () {
  try {
    const urlId = window.location.search
    const response = await fetch(`${singleProductUrl}${urlId}`)
    if (response.ok) {
      return await response.json()
    } else {
      console.log(response.status)
      centerDOM.innerHTML = errorMessage
    }

  } catch (error) {
    console.log(error)
  }

}

/* Function to Display data to the DOM */

function displayData (data) {
  const { id, fields } = data
  const { name, company, price, colors, description } = fields
  const image = fields['image'][0]['thumbnails']['large']['url']
  productID = id
  const colorsGroup = colors.map((color) => {
    return `<span class="product-color" style="background-color: ${color}"></span>`
  })

  document.title = `${name.toUpperCase()} | Comfy`
  pageTitleDOM.innerText = `Home / ${name}`
  imgDOM.src = image
  titleDOM.innerText = name
  companyDOM.innerText = company
  priceDOM.innerText = formatPrice(price)
  colorsDOM.innerHTML = colorsGroup.join('')
  descDOM.innerText = description

}

// ---------- EVENT LISTENER  ----------

window.addEventListener('DOMContentLoaded', async function () {
  const data = await getData()
  displayData(data)
  loading.style.display = 'none'
})

cartBtn.addEventListener("click", ()=>{
  console.log('Added to Cart, Single Product')
  addToCart(productID)
})