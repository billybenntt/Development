// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import display from '../displayProducts.js';
import { store } from '../store.js';
import { getElement } from '../utils.js';


// ---------- SELECT ELEMENTS  ----------

const productsContainer = getElement(".products-container")
const loadingContainer = getElement(".page-loading")

// ---------- HELPER FUNCTIONS ----------



display(store,productsContainer )
setupSearch(store)
setupCompanies(store)
setupPrice(store)



loadingContainer.style.display = "none"


