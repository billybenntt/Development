import { getStorageItem, setStorageItem } from './utils.js'

let store = getStorageItem('store')

// ---------- UTILITY FUNCTIONS  ----------

const setupStore = (data) => {
  store = data.map((item) => {
    /* Destructure Data */
    const {
      id, fields: { featured, name, price, company, colors, image: img }
    } = item
    /* Extract Item */
    const image = img[0]['thumbnails']['large']['url']
    /* Return formed Object */
    return { id, featured, name, price, company, colors, image }
  })

  setStorageItem('store', store)

}

const findProduct = () => {}

// ---------- EXPORTS  ----------

export { store, setupStore, findProduct }
