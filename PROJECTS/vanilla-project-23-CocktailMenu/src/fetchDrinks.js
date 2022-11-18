async function fetchDrinks (url) {

  try {
    const response = await fetch(url)
    const data = await response.json()





    return data

  } catch (e) {
    console.log(e, 'No Data to Parse')
    return { drinks: [] }

  }

}

export default fetchDrinks