import { getElement } from '../utils.js'
import display from '../displayProducts.js'

// ---------- SELECT ELEMENTS  ----------
const companiesContainer = getElement('.companies')
const productsContainer = getElement('.products-container')

// ---------- HELPER FUNCTIONS ----------

const setupCompanies = (store) => {
  /* Get Unique values*/
  const companies = ['all', ...new Set(store.map(item => item.company))]
  /* Map the Unique values into buttons*/
  const companiesBtn = companies.map((item) => {
    return `<button class="company-btn">${item}</button>`
  })
  /*Inject values into the DOM*/
  companiesContainer.innerHTML = companiesBtn.join('')

  /*Bubble event the parent and filter */
  companiesContainer.addEventListener('click', (e) => {
    const element = e.target
    if (element.classList.contains('company-btn')) {
      let inputValue = element.innerText === 'All' ? '' : element.innerText.toLowerCase()
      let filteredProducts = store.filter((item) => item.company.includes(inputValue))
      display(filteredProducts, productsContainer, true)
    }
  })

}

export default setupCompanies
