// ---------- SELECT ELEMENTS ----------

const content = document.querySelector('.content')
const btn = document.querySelector('.btn')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random?category=animal'

// ---------- HELPER FUNCTIONS ----------

/* Promisified Function with XRH to GET Data */
function getData (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return
      if (xhr.readyState === 4 && xhr.status === 200) {
        const { value: data } = JSON.parse(xhr.responseText)
        resolve(data)
      } else {
        reject(
          {
            status: xhr.status,
            text: xhr.statusText,
            reason: `${new Error('error in fetching Data')}`
          }
        )
      }
    }
  })
}

/* Function to Display data in the DOM*/
function displayData (data) {
  content.innerText = data
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

  /* Promise Chaining  */
  getData(url).then((data) => displayData(data)).catch(error => {
    console.log(error)
  })

})

