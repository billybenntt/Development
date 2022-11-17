// ------------- SELECT ITEMS AND DATA -------------

const url = './api/people.json'
const btn = document.querySelector('.btn')
const targetContainer = document.querySelector('.container')

// ------------- HELPER FUNCTION  -------------

const getData = () => {

  const xhr = new XMLHttpRequest()

  xhr.open('GET', url)

  xhr.onreadystatechange = () => {
    const connection = {
      state: xhr.readyState,
      status: xhr.status,
    }
    /* Parse STRING Data into OBJECT */
    const displayData = JSON.parse(xhr.responseText)

    if (connection.state === 4 && connection.status === 200) {
      /* Insert Data into Container */
      targetContainer.innerHTML = displayData.map((item) => {
        return `<p>${item.id} ${item.name.toUpperCase()}</p>`
      }).join('')

    }

  }

  xhr.send()

}

// ------------- EVENT LISTENER  -------------

btn.addEventListener('click', () => {
  getData()
})





