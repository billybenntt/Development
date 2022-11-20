import { showLoading } from './toggleLoading.js'

/*Function to Get API Data*/
async function fetchData (url) {
  /* Show Loading while data loads*/
  showLoading()
  try {
    const response = await fetch(url)
    return await response.json()

  } catch (error) {
    console.log(error, 'No Data to Parse')
    return 0

  }
}

export default fetchData