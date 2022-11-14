// ------------- SELECT DATA & ELEMENTS -------------

const url = './api/people.json'
const btn = document.querySelector('.btn')
const targetContainer = document.querySelector('.container')

// ------------- HELPER FUNCTIONS -------------

/* Function to Call the API and Get the DATA */
function getData () {
  fetch(url).then((resp) => resp.json()).then((data) => {
    displayData(data)
  }).catch((error) => {
    console.log(error)
  })
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

  /* Call Trigger Function */
  getData()
})