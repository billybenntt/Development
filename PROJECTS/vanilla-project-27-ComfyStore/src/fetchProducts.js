import { allProductsUrl } from './utils.js'

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl)

     console.log(response.status)
    if (response.ok) {
      const data = await response.json()
      console.log(response.status)
      return data
    }

  } catch (error) {
    console.log(error)
  }
}

export default fetchProducts
