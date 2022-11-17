// ------------- SELECT DATA & ELEMENTS -------------

const url = './api/people.json'
const btn = document.querySelector('.btn')
const targetContainer = document.querySelector('.container')

// ------------- HELPER FUNCTIONS -------------

/* [AsyncAwait] Function to Get Data */
async function getData () {
  try {
    /* Get Response Data */
    let response = await fetch(url)
    /* Get Parsed JSON Data*/
    let data = await response.json()
    /*Pass Data to DOM Function*/
    displayData(data)
    console.log('Try -> Fetch-> Response -> Data -> Display')

  } catch (error) {
    console.log('Catch -> Error')
    console.log(error)
  }
  /*Return Promise Value*/
  return 'OK'
}

/* Function to Modify the DOM */
function displayData (items) {
  const displayData = items.map((item) => {
    const { id, name } = item
    return `<p>${id}🌐${name}</p>`
  })
  targetContainer.innerHTML = displayData.join('')
}

// ------------- EVENT LISTENER -------------

btn.addEventListener('click', () => {

  /* Async Function Call Value */
  getData().then((value) => {
    console.log(value)
  })

})