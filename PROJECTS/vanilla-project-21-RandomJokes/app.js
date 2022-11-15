// ---------- SELECT ELEMENTS ----------

const content = document.querySelector('.content')
const btn = document.querySelector('.btn')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random?category=dev'

// ---------- HELPER FUNCTIONS ----------

/* Get Data using FETCH and passes Data to DisplayData*/
async function getData (url) {
  try {
    /* Get Response Promise*/
    const response = await fetch(url)
    /* Get Data Promise */
    const data = await response.json()
    /*Pass data Object to DOM Function*/
    displayData(data)
  } catch (error) {
    console.log(error)
  }
  return 'OK'
}

/* Function to Display data in the DOM*/

/* Takes Object and Destructures the value and assigns to joke */
function displayData ({ value: joke }) {
  content.innerText = joke
  shakeChuck()
}

/* Function to Apply Animation to the DOM*/
function shakeChuck () {
  img.classList.add('shake-img')
  const randomTime = Math.random() * 1000
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, randomTime)
}

// ---------- EVENT LISTENERS ----------
btn.addEventListener('click', () => {
  getData(url).then()
})

