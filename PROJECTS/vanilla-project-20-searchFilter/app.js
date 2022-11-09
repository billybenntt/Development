/// --------- SELECT ELEMENTS  ---------

const productsContainer = document.querySelector('.products-container')
const companyFilterContainer = document.querySelector('.companies')
const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input')

/// --------- UTILITY FUNCTIONS  ---------

/* Function to Display Products Dynamically */
const displayProducts = (products) => {
  let displayProducts = products.map((item) => {
    const { image, title, price, id } = item
    return `<article class="product" data-id="${id}">
                <img class="product-img img" src="${image}" alt="${title}">
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">€EUR ${price}</span>
                </footer>
            </article>`
  })
  displayProducts = displayProducts.join('')

  /* Empty Array Display*/
  if (!products.length) {
    let message = 'Sorry no products match your search'
    productsContainer.innerHTML = `<h6>${message}</h6>`

  } else {
    productsContainer.innerHTML = displayProducts
  }
}

/* Function to Display Buttons Dynamically */
const displayButtons = (products) => {
  /* Get Unique Value*/
  const uniqueCompanies = ['all', ...new Set(products.map(item => item.company))]

  let categoryButtons = uniqueCompanies.map((item) => {
    return `<button class="company-btn" data-id="${item}">${item}</button>`
  })

  categoryButtons = categoryButtons.join('')
  companyFilterContainer.innerHTML = categoryButtons

  /*Select Dynamically Created Elements then attach event listeners */
  const filterBtns = document.querySelectorAll('.company-btn')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      tabFilter(event.target.dataset.id)
    })
  })

}

/* Function to Filter the Results displayed from Search */
const searchFilter = () => {
  const inputValue = searchInput.value
  const filteredProducts = products.filter((item) => {
    /* If String is empty, Returns Everything*/
    return item.title.toLowerCase().includes(inputValue)
  })
  displayProducts(filteredProducts)
}

/* Function to Filter the Results displayed from Tab Selection */
const tabFilter = (searchCriteria) => {

  let inputValue = searchCriteria === 'all' ? '' : searchCriteria
  const filteredProducts = products.filter((item) => {
    /* If String is empty, Returns Everything*/
    return item.company.toLowerCase().includes(inputValue)
  })

  displayProducts(filteredProducts)
  /*Clear the Search Input Value*/
  searchInput.value = ''
}

/// --------- EVENT LISTENERS   ---------

window.addEventListener('DOMContentLoaded', () => {
  displayProducts(products)
  displayButtons(products)

})

form.addEventListener('keyup', searchFilter)

