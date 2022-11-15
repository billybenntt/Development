// ---------- SELECT ELEMENTS ----------

const content = document.querySelector('.content')
const btn = document.querySelector('.btn')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random?category=dev'

// ---------- HELPER FUNCTIONS ----------

const getData = (url) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return
    if (xhr.readyState === 4 && xhr.status === 200) {

      const { value: joke } = JSON.parse(xhr.responseText)
      shakeChuck()
      content.innerText = joke

    }
  }
  xhr.send()
}

const shakeChuck = () => {
  /*Add Shaking*/
  img.classList.add('shake-img')
  /*Remove Shaking Randomly */
  const randomTime = Math.random() * 1000
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, randomTime)

}

// ---------- EVENT LISTENERS ----------

btn.addEventListener('click', () => {
  getData(url)
})

