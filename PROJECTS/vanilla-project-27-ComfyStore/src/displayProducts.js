import { formatPrice } from './utils.js'
import { addToCart } from './cart/setupCart.js'

// ---------- SELECT ELEMENTS  ----------

// ---------- HELPER FUNCTIONS  ----------

const display = (data, container) => {
  let products = data.map((item) => {
    const { name, price, image, id } = item
    return `<article class="product">
                <div class="product-container">
                    <img src="${image}" alt="${name}" class="product-img img"/>
                    <div class="product-icons">
                        <a href="product.html?id=${id}" class="product-icon">
                            <i class="fas fa-search"></i>
                        </a>
                        <button class="product-cart-btn product-icon" data-id="${id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <p class="product-name">${name}</p>
                    <p class="product-price">${formatPrice(price)}</p>
                </footer>
            </article>`
  })
  container.innerHTML = products.join('')

  /* Add Event Listener for Cart Button and ID */
  container.addEventListener('click', (event) => {
    let parent = event.target.parentElement
    if (parent.classList.contains('product-cart-btn')) {
      console.log('Added to Cart, Products')
      addToCart(parent.dataset.id)
    }

  })

}

// ---------- EXPORTS  ----------

export default display
