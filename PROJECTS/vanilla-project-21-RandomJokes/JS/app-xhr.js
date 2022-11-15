// ---------- SELECT ELEMENTS ----------

const content = document.querySelector('.content')
const btn = document.querySelector('.btn')
const url = 'https://api.chucknorris.io/jokes/random?category=dev'

// ---------- HELPER FUNCTIONS ----------

const getData = (url) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = () => {
    /* Prevent from Doing Anything if Not Ready*/
    if (xhr.readyState !== 4) return
    /* Extract JSON Data if Status:OK and Connection Established*/
    if (xhr.readyState === 4 && xhr.status === 200) {
      /*Destructure and assign Value -> Joke */
      const { value: joke } = JSON.parse(xhr.responseText)
      /*Inject the value into the DOM*/
      content.innerText = joke
    }
  }
  xhr.send()
}

// ---------- EVENT LISTENERS ----------

btn.addEventListener('click', () => {
  getData(url)
})